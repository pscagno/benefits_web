package com.santre.macro.benefits.domain.service;

import com.santre.macro.benefits.domain.entity.ProvinceEntity;

import java.util.List;
import java.util.Optional;

public interface ProvinceService {

    List<ProvinceEntity> getAll();

    Optional<ProvinceEntity> getById(Long id);

    ProvinceEntity save(ProvinceEntity province);

    void delete(Long id);

}
