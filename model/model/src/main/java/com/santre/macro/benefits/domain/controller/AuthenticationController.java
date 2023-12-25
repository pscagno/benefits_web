package com.santre.macro.benefits.domain.controller;

import com.santre.macro.benefits.domain.entity.BenefitEntity;
import com.santre.macro.benefits.domain.entity.UserEntity;
import com.santre.macro.benefits.domain.models.responses.*;
import com.santre.macro.benefits.domain.service.AuthenticationService;
import com.santre.macro.benefits.domain.service.JwtService;
import com.santre.macro.benefits.domain.service.UserService;
import lombok.RequiredArgsConstructor;
import org.bouncycastle.pqc.math.ntru.HPSPolynomial;
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
    public ResponseEntity<?> listAll(){
        var users = new ArrayList<UserRest>();
        for (var user : usersService.getAll()){
            UserRest rest = new UserRest();
            rest.setFirstName(user.getFirstName());
            rest.setLastName(user.getLastName());
            rest.setCityName(user.getCity().getName());
            rest.setCityId(user.getCity().getId());
            rest.setEmail(user.getEmail());
            rest.setCategories(new ArrayList<>());
            for (var category: user.getCategories()){
                var categoryRest = new CategoryRest();
                categoryRest.setName(category.getName());
                categoryRest.setId(category.getId());
                rest.getCategories().add(categoryRest);
            }
            users.add(rest);
        }
        return ResponseEntity.status(HttpStatus.OK).body(users);
    }

    @GetMapping("/user")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> details(@RequestHeader (name="Authorization") String token){
        Optional<UserEntity> userOpt = getTokenUser(token);
        if (userOpt.isPresent()){
            var userRest = new UserRest();
            BeanUtils.copyProperties(userOpt.get(), userRest);
            userRest.setFirstName(userOpt.get().getFirstName());
            userRest.setLastName(userOpt.get().getFirstName());
            userRest.setCityId(userOpt.get().getCity().getId());
            userRest.setCityName(userOpt.get().getCity().getName());
            List<CategoryRest> categories = new ArrayList<>();
            for (var cat: userOpt.get().getCategories()){
                var categoryRest = new CategoryRest();
                categoryRest.setId(cat.getId());
                categoryRest.setName(cat.getName());
                categories.add(categoryRest);
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