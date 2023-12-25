package com.santre.macro.benefits.domain.repository;

import com.santre.macro.benefits.domain.entity.CategoryEntity;
import com.santre.macro.benefits.domain.entity.SubcategoryEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface CategoryRepository extends CrudRepository<CategoryEntity, Long> {

    Optional<CategoryEntity> findByName(String name);
}
