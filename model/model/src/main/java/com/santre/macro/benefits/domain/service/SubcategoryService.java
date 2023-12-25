package com.santre.macro.benefits.domain.service;

import com.santre.macro.benefits.domain.entity.SubcategoryEntity;

import java.util.List;
import java.util.Optional;

public interface SubcategoryService {

    List<SubcategoryEntity> getAll();

    Optional<SubcategoryEntity> getById(Long id);

    Optional<SubcategoryEntity> getByName(String name);

    SubcategoryEntity save(SubcategoryEntity subcategory);

    void delete(Long id);

}
