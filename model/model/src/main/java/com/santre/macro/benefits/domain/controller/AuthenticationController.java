package com.santre.macro.benefits.domain.controller;

import com.santre.macro.benefits.domain.entity.BenefitEntity;
import com.santre.macro.benefits.domain.entity.UserEntity;
import com.santre.macro.benefits.domain.models.responses.*;
import com.santre.macro.benefits.domain.service.AuthenticationService;
import com.santre.macro.benefits.domain.service.JwtService;
import com.santre.macro.benefits.domain.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("auth")
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @Autowired
    private final UserService usersService;

    @Autowired
    private JwtService jwtService;

    @PostMapping("/signup")
    public JwtAuthenticationResponse signup(@RequestBody SignUpRequest request) {
        return authenticationService.signup(request);
    }

    @PostMapping("/signin")
    public JwtAuthenticationResponse signin(@RequestBody SignInRequest request) {
        return authenticationService.signin(request);
    }

    @GetMapping("/users")
    @PreAuthorize("hasRole('ADMIN')")
    public List<UserEntity> listAll(){
        return usersService.getAll();
    }

    @GetMapping("/user")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> details(@RequestHeader (name="Authorization") String token){
        Optional<UserEntity> userOpt = getTokenUser(token);
        if (userOpt.isPresent()){
            var userRest = new UserRest();
            BeanUtils.copyProperties(userOpt.get(), userRest);
            userRest.setName(userOpt.get().getEmail());
            userRest.setCityId(userOpt.get().getCity().getId());
            userRest.setCityName(userOpt.get().getCity().getName());
            List<String> categories = new ArrayList<String>();
            for (var cat: userOpt.get().getCategories()){
                categories.add(cat.getName());
            }
            userRest.setCategories(categories);
            return ResponseEntity
                        .status(HttpStatus.CREATED)
                        .body(userRest);
        }else{
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body("User not found");
        }
    }

    private Optional<UserEntity> getTokenUser(String token){
        var token_without_bearer = token.substring(7);
        var email = jwtService.extractUserName(token_without_bearer);
        return usersService.getByEmail(email);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> delete(@PathVariable Long id){
        Optional<UserEntity> userOptional = usersService.getById(id);
        if (userOptional.isPresent()){
            usersService.delete(id);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
}