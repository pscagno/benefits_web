package com.santre.macro.benefits.domain.service;

import com.santre.macro.benefits.domain.entity.CategoryEntity;
import com.santre.macro.benefits.domain.entity.CityEntity;
import com.santre.macro.benefits.domain.models.responses.JwtAuthenticationResponse;
import com.santre.macro.benefits.domain.models.responses.SignInRequest;
import com.santre.macro.benefits.domain.repository.UserRepository;
import com.santre.macro.benefits.domain.entity.UserEntity;
import com.santre.macro.benefits.domain.entity.Role;

import com.santre.macro.benefits.domain.models.responses.SignUpRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final UserService userService;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final CategoryService categoryService;

    public JwtAuthenticationResponse signup(SignUpRequest request) {
        var city = new CityEntity();
        city.setId(request.getIdCity());

        var categories = new HashSet<CategoryEntity>();
        for (var catId: request.getCategories()) {
            var category = categoryService.getById(catId);
            category.ifPresent(categories::add);
        }

        var user = UserEntity
                    .builder()
                    .firstName(request.getFirstName())
                    .lastName(request.getLastName())
                    .email(request.getEmail())
                    .password(passwordEncoder.encode(request.getPassword()))
                    .city(city)
                    .categories(categories)
                    .role(Role.ROLE_USER)
                    .build();

        user = userService.save(user);
        var jwt = jwtService.generateToken(user);
        return JwtAuthenticationResponse.builder().token(jwt).build();
    }

    public JwtAuthenticationResponse signupAdmin(SignUpRequest request) {
        var user = UserEntity
                .builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.ROLE_ADMIN)
                .build();

        user = userService.save(user);
        var jwt = jwtService.generateToken(user);
        return JwtAuthenticationResponse.builder().token(jwt).build();
    }

    public JwtAuthenticationResponse signin(SignInRequest request) {
        var user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new IllegalArgumentException("Invalid email or password."));
        var userEmailPass = new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword());
        authenticationManager.authenticate(userEmailPass);
        var jwt = jwtService.generateToken(user);

        return JwtAuthenticationResponse.builder().token(jwt).build();
    }
  
}
