package com.santre.macro.benefits.domain.controller;

import com.santre.macro.benefits.domain.entity.SubcategoryEntity;
import com.santre.macro.benefits.domain.service.BenefitService;
import com.santre.macro.benefits.domain.service.SubcategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import jakarta.validation.Valid;

@RestController
@RequestMapping("subcategory")
public class SubcategoryController {

    @Autowired
    private SubcategoryService service;

    @Autowired
    private BenefitService benefitsService;

    @GetMapping
    public List<SubcategoryEntity> list(){
        return service.getAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> details(@PathVariable Long id){
        Optional<SubcategoryEntity> subcategoryOptional = service.getById(id);
        if (subcategoryOptional.isPresent()) {
            return ResponseEntity.ok(
                    subcategoryOptional.get()
            );
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> delete(@PathVariable Long id){
        Optional<SubcategoryEntity> subcategoryOptional = service.getById(id);
        if (subcategoryOptional.isPresent()){
            var subcategoryBenefits = benefitsService.getBySubcategory(subcategoryOptional.get());
            if (!subcategoryBenefits.isEmpty()){
                return ResponseEntity.status(HttpStatus.CONFLICT)
                        .body("La subcategoria esta relacionada con un beneficio. Elimine o modifique el beneficio.");
            }
            service.delete(id);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> create(@Valid @RequestBody SubcategoryEntity subcategory, BindingResult result){
        if (result.hasErrors()){
            return validate(result);
        }
        var subcategoryDb = service.getByName(subcategory.getName());
        if (subcategoryDb.isPresent()){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("La subcategoria ya existe");
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(service.save(subcategory));
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> edit(@Valid @RequestBody SubcategoryEntity subcategory, BindingResult result, @PathVariable Long id){
        if (result.hasErrors()){
            return validate(result);
        }
        Optional<SubcategoryEntity> subcategoryOptional = service.getById(id);
        if (subcategoryOptional.isPresent()) {
            SubcategoryEntity subcategoryDb = subcategoryOptional.get();
            subcategoryDb.setCategory(subcategory.getCategory());
            subcategoryDb.setName(subcategory.getName());
            
            return ResponseEntity
                    .status(HttpStatus.CREATED)
                    .body(service.save(subcategoryDb));
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    private static ResponseEntity<Map<String, String>> validate(BindingResult result) {
        Map<String,String> errors = new HashMap<String, String>();
        result.getFieldErrors().forEach(err -> {
            errors.put(err.getField(), err.getDefaultMessage());
        });
        return ResponseEntity.badRequest().body(errors);
    }
}
