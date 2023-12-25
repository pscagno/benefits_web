package com.santre.macro.benefits.domain.repository;

import com.santre.macro.benefits.domain.entity.CategoryEntity;
import com.santre.macro.benefits.domain.entity.ProvinceEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface ProvinceRepository extends CrudRepository<ProvinceEntity, Long> {

    Optional<ProvinceEntity> findByName(String name);
}
