package com.santre.macro.benefits.domain.controller;

import com.santre.macro.benefits.domain.entity.ProvinceEntity;
import com.santre.macro.benefits.domain.service.ProvinceService;
import jakarta.validation.Valid;
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

@RestController
@RequestMapping("province")
public class ProvinceController {

    @Autowired
    private ProvinceService service;

    @GetMapping
    public List<ProvinceEntity> list(){
        return service.getAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> details(@PathVariable Long id){
        Optional<ProvinceEntity> provinceOptional = service.getById(id);
        if (provinceOptional.isPresent()) {
            return ResponseEntity.ok(
                    provinceOptional.get()
            );
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> delete(@PathVariable Long id){
        Optional<ProvinceEntity> provinceOptional = service.getById(id);
        if (provinceOptional.isPresent()){
            service.delete(id);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> create(@Valid @RequestBody ProvinceEntity province, BindingResult result){
        if (result.hasErrors()){
            return validate(result);
        }
        var provinceDb = service.getByName(province.getName());
        if (provinceDb.isPresent()){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("La provincia ya existe");
        }

        return ResponseEntity.status(HttpStatus.CREATED).body(service.save(province));
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> edit(@Valid @RequestBody ProvinceEntity province, BindingResult result, @PathVariable Long id){
        if (result.hasErrors()){
            return validate(result);
        }
        Optional<ProvinceEntity> provinceOptional = service.getById(id);
        if (provinceOptional.isPresent()) {
            ProvinceEntity provinceDb = provinceOptional.get();
            provinceDb.setName(province.getName());

            return ResponseEntity
                    .status(HttpStatus.CREATED)
                    .body(service.save(provinceDb));
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
