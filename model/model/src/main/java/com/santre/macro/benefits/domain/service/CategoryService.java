package com.santre.macro.benefits.domain.service;

import com.santre.macro.benefits.domain.entity.CategoryEntity;

import java.util.List;
import java.util.Optional;

public interface CategoryService {

    List<CategoryEntity> getAll();

    Optional<CategoryEntity> getById(Long id);

    CategoryEntity save(CategoryEntity category);

    void delete(Long id);

}
