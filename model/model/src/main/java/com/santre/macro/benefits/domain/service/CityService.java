package com.santre.macro.benefits.domain.service;

import com.santre.macro.benefits.domain.entity.CityEntity;

import java.util.List;
import java.util.Optional;

public interface CityService {

    List<CityEntity> getAll();

    Optional<CityEntity> getById(Long id);

    CityEntity save(CityEntity city);

    void delete(Long id);

}
