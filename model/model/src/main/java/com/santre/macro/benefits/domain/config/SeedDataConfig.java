package com.santre.macro.benefits.domain.config;

import com.santre.macro.benefits.domain.entity.CategoryEntity;
import com.santre.macro.benefits.domain.entity.ProvinceEntity;
import com.santre.macro.benefits.domain.entity.Role;
import com.santre.macro.benefits.domain.entity.UserEntity;
import com.santre.macro.benefits.domain.repository.CategoryRepository;
import com.santre.macro.benefits.domain.repository.ProvinceRepository;
import com.santre.macro.benefits.domain.repository.UserRepository;
import com.santre.macro.benefits.domain.service.CategoryService;
import com.santre.macro.benefits.domain.service.ProvinceService;
import com.santre.macro.benefits.domain.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Paths;

import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
@Slf4j
public class SeedDataConfig implements CommandLineRunner {

    private final UserRepository userRepository;
    private final UserService userService;
    private final ProvinceRepository provinceRepository;
    private final ProvinceService provinceService;
    private final CategoryRepository categoryRepository;
    private final CategoryService categoryService;

    private final PasswordEncoder passwordEncoder;

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

        if (provinceRepository.count() == 0) {
            ProvinceEntity prov1 = new ProvinceEntity();
            prov1.setName("Buenos Aires");
            provinceService.save(prov1);

            ProvinceEntity prov2 = new ProvinceEntity();
            prov2.setName("CABA");
            provinceService.save(prov2);

            ProvinceEntity prov3 = new ProvinceEntity();
            prov3.setName("Cordoba");
            provinceService.save(prov3);

            ProvinceEntity prov4 = new ProvinceEntity();
            prov4.setName("Mendoza");
            provinceService.save(prov4);

            ProvinceEntity prov5 = new ProvinceEntity();
            prov5.setName("Santa Fe");
            provinceService.save(prov5);

            ProvinceEntity prov6 = new ProvinceEntity();
            prov6.setName("Neuquen");
            provinceService.save(prov6);

            ProvinceEntity prov7 = new ProvinceEntity();
            prov7.setName("Rio Negro");
            provinceService.save(prov7);
        }

        if (categoryRepository.count() == 0) {
            CategoryEntity cat1 = new CategoryEntity();
            cat1.setName("Balance");
            cat1.setOrderInMenu(1);
            cat1.setColor("#009900");
            cat1.setImageHeader(Files.readAllBytes(Paths.get("./src/main/resources/static/images/balance.png")));
            cat1.setImageHeaderMobile(Files.readAllBytes(Paths.get("./src/main/resources/static/images/balance.png")));
            cat1.setImageMenu(Files.readAllBytes(Paths.get("./src/main/resources/static/images/balance.png")));
            categoryService.save(cat1);

            CategoryEntity cat2 = new CategoryEntity();
            cat2.setName("Salud");
            cat2.setOrderInMenu(2);
            cat2.setColor("#999900");
            cat2.setImageHeader(Files.readAllBytes(Paths.get("./src/main/resources/static/images/salud.png")));
            cat2.setImageHeaderMobile(Files.readAllBytes(Paths.get("./src/main/resources/static/images/salud.png")));
            cat2.setImageMenu(Files.readAllBytes(Paths.get("./src/main/resources/static/images/salud.png")));
            categoryService.save(cat2);

            CategoryEntity cat3 = new CategoryEntity();
            cat3.setName("Celebraciones");
            cat3.setOrderInMenu(3);
            cat3.setColor("#FF9999");
            cat3.setImageHeader(Files.readAllBytes(Paths.get("./src/main/resources/static/images/celebraciones.png")));
            cat3.setImageHeaderMobile(
                    Files.readAllBytes(Paths.get("./src/main/resources/static/images/celebraciones.png")));
            cat3.setImageMenu(Files.readAllBytes(Paths.get("./src/main/resources/static/images/celebraciones.png")));
            categoryService.save(cat3);

            CategoryEntity cat4 = new CategoryEntity();
            cat4.setName("Gastronomia");
            cat4.setOrderInMenu(4);
            cat4.setColor("#009900");
            cat4.setImageHeader(Files.readAllBytes(Paths.get("./src/main/resources/static/images/gastronomia.png")));
            cat4.setImageHeaderMobile(
                    Files.readAllBytes(Paths.get("./src/main/resources/static/images/gastronomia.png")));
            cat4.setImageMenu(Files.readAllBytes(Paths.get("./src/main/resources/static/images/gastronomia.png")));
            categoryService.save(cat4);

            CategoryEntity cat5 = new CategoryEntity();
            cat5.setName("Productos Bancarios");
            cat5.setOrderInMenu(5);
            cat5.setColor("#3311FF");
            cat5.setImageHeader(Files.readAllBytes(Paths.get("./src/main/resources/static/images/prod_bancarios.png")));
            cat5.setImageHeaderMobile(
                    Files.readAllBytes(Paths.get("./src/main/resources/static/images/prod_bancarios.png")));
            cat5.setImageMenu(Files.readAllBytes(Paths.get("./src/main/resources/static/images/prod_bancarios.png")));
            categoryService.save(cat5);

            CategoryEntity cat6 = new CategoryEntity();
            cat6.setName("Celebraciones");
            cat6.setOrderInMenu(5);
            cat6.setColor("#11FF55");
            cat6.setImageHeader(Files.readAllBytes(Paths.get("./src/main/resources/static/images/campañas.png")));
            cat6.setImageHeaderMobile(Files.readAllBytes(Paths.get("./src/main/resources/static/images/campañas.png")));
            cat6.setImageMenu(Files.readAllBytes(Paths.get("./src/main/resources/static/images/campañas.png")));
            categoryService.save(cat6);
        }

    }

}
