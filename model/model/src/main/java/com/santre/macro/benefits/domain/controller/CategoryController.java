package com.santre.macro.benefits.domain.controller;

import com.santre.macro.benefits.domain.entity.BenefitEntity;
import com.santre.macro.benefits.domain.entity.CategoryEntity;
import com.santre.macro.benefits.domain.entity.UserBenefitFavoriteEntity;
import com.santre.macro.benefits.domain.entity.UserEntity;
import com.santre.macro.benefits.domain.models.responses.BenefitDetailRest;
import com.santre.macro.benefits.domain.models.responses.BenefitRest;
import com.santre.macro.benefits.domain.models.responses.CategoryDetailRest;
import com.santre.macro.benefits.domain.models.responses.CategoryRest;
import com.santre.macro.benefits.domain.repository.UserRepository;
import com.santre.macro.benefits.domain.service.BenefitService;
import com.santre.macro.benefits.domain.service.CategoryService;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.*;

@RestController
@RequestMapping("category")
public class CategoryController { 

    @Autowired
    private CategoryService service;

    @Autowired
    private BenefitService benefitsService;
    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<CategoryRest> list(){
        List<CategoryEntity> categories = service.getAll();
        return this.listCategoriesRest(categories);
    }

    private List<CategoryRest> listCategoriesRest(List<CategoryEntity> categories){
        List<CategoryRest> categoryRests = new ArrayList<>();
        for (CategoryEntity category: categories) {
            var categoryRest = new CategoryRest();
            BeanUtils.copyProperties(category, categoryRest);
            categoryRests.add(categoryRest);
        }
        return categoryRests;
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> details(@PathVariable Long id){
        Optional<CategoryEntity> categoryOptional = service.getById(id);
        if (categoryOptional.isPresent()) {
            var categoryRest = new CategoryDetailRest();
            var category = categoryOptional.get();
            BeanUtils.copyProperties(category, categoryRest);
            return ResponseEntity.ok(categoryRest);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> delete(@PathVariable Long id){
        Optional<CategoryEntity> categoryOptional = service.getById(id);
        if (categoryOptional.isPresent()){
            var categoryBenefits = benefitsService.getByCategory(categoryOptional.get());
            if (!categoryBenefits.isEmpty()){
                return ResponseEntity.status(HttpStatus.CONFLICT)
                        .body("La categoria esta relacionada con un beneficio. Elimine o modifique el beneficio.");
            }
            var category = service.getById(id);
            if (category.isPresent()) {
                service.delete(id);
            }
            return ResponseEntity.status(HttpStatus.OK).build();
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> create(
            @RequestPart("category") CategoryEntity category,
            @RequestPart("imageHeader") MultipartFile imageHeader,
            @RequestPart("imageHeaderMobile") MultipartFile imageHeaderMobile,
            @RequestPart("imageMenu") MultipartFile imageMenu,
            BindingResult result) throws IOException {
        if (result.hasErrors()){
            return validate(result);
        }

        var categoryDb = service.getByName(category.getName());
        if (categoryDb.isPresent()){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("La categoria ya existe");
        }

        category.setImageHeader(imageHeader.getBytes());
        category.setImageHeaderMobile(imageHeaderMobile.getBytes());
        category.setImageMenu(imageMenu.getBytes());
        return ResponseEntity.status(HttpStatus.CREATED).body(service.save(category));
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> edit(
            @RequestPart("category") CategoryEntity category,
            @RequestPart("imageHeader") Optional<MultipartFile> imageHeader,
            @RequestPart("imageHeaderMobile") Optional<MultipartFile> imageHeaderMobile,
            @RequestPart("imageMenu") Optional<MultipartFile> imageMenu,
            @PathVariable Long id){
        Optional<CategoryEntity> CategoryOptional = service.getById(id);
        if (CategoryOptional.isPresent()) {
            CategoryEntity categoryDb = CategoryOptional.get();
            categoryDb.setColor(category.getColor());
            categoryDb.setName(category.getName());
            categoryDb.setOrderInMenu(category.getOrderInMenu());
            imageMenu.ifPresent(multipartFile -> {
                try { categoryDb.setImageMenu(multipartFile.getBytes()); } catch (IOException e) { throw new RuntimeException(e); }
            });
            imageHeader.ifPresent(multipartFile -> {
                try { categoryDb.setImageHeader(multipartFile.getBytes()); } catch (IOException e) { throw new RuntimeException(e); }
            });
            imageHeaderMobile.ifPresent(multipartFile -> {
                try { categoryDb.setImageHeaderMobile(multipartFile.getBytes()); } catch (IOException e) { throw new RuntimeException(e); }
            });
            
            return ResponseEntity
                    .status(HttpStatus.CREATED)
                    .body(service.save(categoryDb));
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    private static ResponseEntity<Map<String, String>> validate(BindingResult result) {
        Map<String,String> errors = new HashMap<>();
        result.getFieldErrors().forEach(err -> {
            errors.put(err.getField(), err.getDefaultMessage());
        });
        return ResponseEntity.badRequest().body(errors);
    }
}
