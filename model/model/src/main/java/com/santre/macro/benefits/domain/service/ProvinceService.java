package com.santre.macro.benefits.domain.service;

import com.santre.macro.benefits.domain.entity.CategoryEntity;
import com.santre.macro.benefits.domain.entity.ProvinceEntity;

import java.util.List;
import java.util.Optional;

public interface ProvinceService {

    List<ProvinceEntity> getAll();

    Optional<ProvinceEntity> getById(Long id);

    Optional<ProvinceEntity> getByName(String name);

    ProvinceEntity save(ProvinceEntity province);

    void delete(Long id);

}
