package com.santre.macro.benefits.domain.config;

import com.santre.macro.benefits.domain.entity.Role;
import com.santre.macro.benefits.domain.entity.UserEntity;
import com.santre.macro.benefits.domain.repository.UserRepository;
import com.santre.macro.benefits.domain.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
@Slf4j
public class SeedDataConfig implements CommandLineRunner {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserService userService;

    @Override
    public void run(String... args) throws Exception {
        
        if (userRepository.count() == 0) {
            UserEntity admin = UserEntity
                          .builder()
                          .firstName("admin")
                          .lastName("admin")
                          .email("admin@admin.com")
                          .password(passwordEncoder.encode("password"))
                          .role(Role.ROLE_ADMIN)
                          .build();

            userService.save(admin);
            log.debug("created ADMIN user - {}", admin);
        }
    }

}
