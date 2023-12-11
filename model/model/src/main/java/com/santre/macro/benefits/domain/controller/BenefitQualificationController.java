package com.santre.macro.benefits.domain.controller;

import com.santre.macro.benefits.domain.entity.BenefitEntity;
import com.santre.macro.benefits.domain.entity.BenefitQualificationEntity;
import com.santre.macro.benefits.domain.entity.UserEntity;
import com.santre.macro.benefits.domain.service.BenefitQualificationService;
import com.santre.macro.benefits.domain.service.BenefitService;
import com.santre.macro.benefits.domain.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("benefitQualification")
public class BenefitQualificationController {

    @Autowired
    private BenefitQualificationService service;

    @Autowired
    private BenefitService serviceBenefit;

    @Autowired
    private UserService serviceUsers;

    @GetMapping("/benefit/{id}")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    public List<BenefitQualificationEntity> listByBenefit(@PathVariable Long id){
        Optional<BenefitEntity> optBenefit = serviceBenefit.getById(id);
        if (optBenefit.isPresent()) {
            return service.getAllByBenefit(optBenefit.get());
        }else{
            return new ArrayList<>();
        }
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    public ResponseEntity<?> details(@PathVariable Long id){
        Optional<BenefitQualificationEntity> benefitQualificationOptional = service.getById(id);
        if (benefitQualificationOptional.isPresent()) {
            return ResponseEntity.ok(
                    benefitQualificationOptional.get()
            );
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> delete(@PathVariable Long id){
        Optional<BenefitQualificationEntity> benefitQualificationOptional = service.getById(id);
        if (benefitQualificationOptional.isPresent()){
            service.delete(id);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> create(@RequestBody @Valid BenefitQualificationEntity benefitQualification, BindingResult result){
        if (result.hasErrors()){
            return validate(result);
        }
        Optional<UserEntity> user = serviceUsers.getAll().stream().findFirst();
        if (user.isEmpty()) {
            throw new RuntimeException("No hay ningún usuario identificado.");
        }
        Optional<BenefitEntity> benefit = serviceBenefit.getById(benefitQualification.getBenefit().getId());
        if (benefit.isPresent()){
            benefitQualification.setBenefit(benefit.get());
        }
        benefitQualification.setDate(new Date());
        benefitQualification.setUser(user.get());
        return ResponseEntity.status(HttpStatus.CREATED).body(service.save(benefitQualification));
    }

    private static ResponseEntity<Map<String, String>> validate(BindingResult result) {
        Map<String,String> errors = new HashMap<String, String>();
        result.getFieldErrors().forEach(err -> {
            errors.put(err.getField(), err.getDefaultMessage());
        });
        return ResponseEntity.badRequest().body(errors);
    }

}
