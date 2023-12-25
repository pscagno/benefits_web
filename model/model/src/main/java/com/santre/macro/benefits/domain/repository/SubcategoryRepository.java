package com.santre.macro.benefits.domain.repository;

import com.santre.macro.benefits.domain.entity.SubcategoryEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface SubcategoryRepository extends CrudRepository<SubcategoryEntity, Long> {

    Optional<SubcategoryEntity> findByName(String name);
}
