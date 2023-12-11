package com.santre.macro.benefits.domain.controller;

import com.santre.macro.benefits.domain.entity.BenefitRegionEntity;
import com.santre.macro.benefits.domain.service.*;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("benefitRegion")
public class BenefitRegionController {


    @Autowired
    private CityService cityService;
    @Autowired
    private BenefitRegionService service;

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> delete(@PathVariable Long id){
        Optional<BenefitRegionEntity> benefitRegionOptional = service.getById(id);
        if (benefitRegionOptional.isPresent()){
            service.delete(id);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> create(@RequestBody @Valid BenefitRegionEntity benefitRegion, BindingResult result){
        if (result.hasErrors()){
            return validate(result);
        }
        try {
            Optional<BenefitRegionEntity> regiondb = Optional.empty();
            if (benefitRegion.getCity() == null && benefitRegion.getProvince() == null) {
                regiondb = service.getByBenefitProvinceCity(benefitRegion.getBenefit(), Optional.empty(), Optional.empty());
            } else if (benefitRegion.getCity() == null) {
                regiondb = service.getByBenefitProvinceCity(benefitRegion.getBenefit(), Optional.of(benefitRegion.getProvince()), Optional.empty());
            } else {
                regiondb = service.getByBenefitProvinceCity(benefitRegion.getBenefit(), Optional.of(benefitRegion.getProvince()), Optional.of(benefitRegion.getCity()));
            }
            if (regiondb.isPresent()){
                throw new Exception("The region already exist for the benefit.");
            }

            if (benefitRegion.getCity() != null) {
                var cityOptional = cityService.getById(benefitRegion.getCity().getId());
                if (cityOptional.isPresent()) {
                    var city = cityOptional.get();
                    if (!city.getProvince().getId().equals(benefitRegion.getProvince().getId())) {
                        throw new Exception("Error: City doesn't belong to province.");
                    }
                }
            }
            var br = service.save(benefitRegion);
            return ResponseEntity.status(HttpStatus.CREATED).body("ok");
        }catch (DataIntegrityViolationException ex){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error: Inconsistency data.");
        }catch (Exception ex){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
        }
    }

    private static ResponseEntity<Map<String, String>> validate(BindingResult result) {
        Map<String,String> errors = new HashMap<String, String>();
        result.getFieldErrors().forEach(err -> {
            errors.put(err.getField(), err.getDefaultMessage());
        });
        return ResponseEntity.badRequest().body(errors);
    }

}
