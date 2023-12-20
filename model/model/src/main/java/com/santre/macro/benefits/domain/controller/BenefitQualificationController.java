package com.santre.macro.benefits.domain.controller;

import com.santre.macro.benefits.domain.entity.BenefitEntity;
import com.santre.macro.benefits.domain.entity.BenefitQualificationEntity;
import com.santre.macro.benefits.domain.entity.UserEntity;
import com.santre.macro.benefits.domain.models.responses.ListBenefitsRest;
import com.santre.macro.benefits.domain.service.BenefitQualificationService;
import com.santre.macro.benefits.domain.service.BenefitService;
import com.santre.macro.benefits.domain.service.JwtService;
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

    @Autowired
    private JwtService jwtService;

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
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> create(
            @RequestHeader (name="Authorization") String token,
            @RequestBody @Valid BenefitQualificationEntity benefitQualification,
            BindingResult result)
    {
        Optional<UserEntity> userOpt = getTokenUser(token);
        if (userOpt.isPresent()) {
            if (result.hasErrors()) {
                return validate(result);
            }

            Optional<BenefitEntity> benefit = serviceBenefit.getById(benefitQualification.getBenefit().getId());
            if (benefit.isPresent()) {
                Optional<BenefitQualificationEntity> benefitQualificationDb = service
                        .getByBenefitAndUser(benefit.get(), userOpt.get());
                if (benefitQualificationDb.isPresent()){
                    return ResponseEntity.status(HttpStatus.NOT_FOUND)
                            .body("El beneficio ya fue calificado por el usuario.");
                }
                benefitQualification.setBenefit(benefit.get());

                benefitQualification.setDate(new Date());
                benefitQualification.setUser(userOpt.get());
                return ResponseEntity.status(HttpStatus.CREATED).body(service.save(benefitQualification));
            }else{
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body("Beneficio invalido");
            }
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Error grave");
        }
    }

    private static ResponseEntity<Map<String, String>> validate(BindingResult result) {
        Map<String,String> errors = new HashMap<String, String>();
        result.getFieldErrors().forEach(err -> {
            errors.put(err.getField(), err.getDefaultMessage());
        });
        return ResponseEntity.badRequest().body(errors);
    }

    private Optional<UserEntity> getTokenUser(String token){
        var token_without_bearer = token.substring(7);
        var email = jwtService.extractUserName(token_without_bearer);
        return serviceUsers.getByEmail(email);
    }
}
