package com.santre.macro.benefits.domain.controller;

import com.santre.macro.benefits.domain.entity.CityEntity;
import com.santre.macro.benefits.domain.service.CityService;
import com.santre.macro.benefits.domain.service.ProvinceService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("city")
public class CityController {

    @Autowired
    private CityService service;

    @Autowired
    private ProvinceService serviceProvince;

    @GetMapping
    public List<CityEntity> list(){
        return service.getAll();
    }

    @GetMapping("/province/{id}")
    public List<CityEntity> listCitiesByProvince(@PathVariable Long id){
        var province = serviceProvince.getById(id);
        if (province.isPresent()) {
            return service.getAllByProvince(province.get());
        }else{
            return new ArrayList<>();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> details(@PathVariable Long id){
        Optional<CityEntity> cityOptional = service.getById(id);
        if (cityOptional.isPresent()) {
            return ResponseEntity.ok(
                    cityOptional.get()
            );
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> delete(@PathVariable Long id){
        Optional<CityEntity> subcategoryOptional = service.getById(id);
        if (subcategoryOptional.isPresent()){
            service.delete(id);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> create(@Valid @RequestBody CityEntity city, BindingResult result){
        if (result.hasErrors()){
            return validate(result);
        }
        var cityDb = service.getByName(city.getName());
        if (cityDb.isPresent()){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("La ciudad/región ya existe");
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(service.save(city));
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> edit(@Valid @RequestBody CityEntity city, BindingResult result, @PathVariable Long id){
        if (result.hasErrors()){
            return validate(result);
        }
        Optional<CityEntity> cityOptional = service.getById(id);
        if (cityOptional.isPresent()) {
            CityEntity cityDb = cityOptional.get();
            cityDb.setProvince(city.getProvince());
            cityDb.setName(city.getName());

            return ResponseEntity
                    .status(HttpStatus.CREATED)
                    .body(service.save(cityDb));
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
