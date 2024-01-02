package com.santre.macro.benefits.domain.controller;

import com.santre.macro.benefits.domain.entity.ImageHomeCarrouselEntity;
import com.santre.macro.benefits.domain.service.ImageHomeCarrouselService;
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
@RequestMapping("homeCarrousel")
public class HomeCarrouselController {

    @Autowired
    private ImageHomeCarrouselService service;

    @GetMapping
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    public List<ImageHomeCarrouselEntity> list(){
        return service.getAll();
    }

    @DeleteMapping("/Image/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> delete(@PathVariable Long id){
        Optional<ImageHomeCarrouselEntity> optional = service.getById(id);
        if (optional.isPresent()){
            service.delete(id);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> create(
            @RequestPart("name") String name,
            @RequestPart("imageHeader") MultipartFile imageHeader,
            @RequestPart("imageHeaderMobile") MultipartFile imageHeaderMobile
    ) throws IOException {
        ImageHomeCarrouselEntity entity = new ImageHomeCarrouselEntity();
        entity.setName(name);
        entity.setImageHeader(imageHeader.getBytes());
        entity.setImageHeaderMobile(imageHeaderMobile.getBytes());
        return ResponseEntity.status(HttpStatus.CREATED).body(service.save(entity));
    }
}
