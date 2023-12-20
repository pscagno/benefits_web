package com.santre.macro.benefits.domain.service;

import com.santre.macro.benefits.domain.entity.CityEntity;
import com.santre.macro.benefits.domain.entity.ProvinceEntity;

import java.util.List;
import java.util.Optional;

public interface CityService {

    List<CityEntity> getAll();

    List<CityEntity> getAllByProvince(ProvinceEntity province);

    Optional<CityEntity> getById(Long id);

    CityEntity save(CityEntity city);

    void delete(Long id);

}
