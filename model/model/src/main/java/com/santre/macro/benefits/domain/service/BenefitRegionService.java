package com.santre.macro.benefits.domain.service;

import com.santre.macro.benefits.domain.entity.BenefitEntity;
import com.santre.macro.benefits.domain.entity.BenefitRegionEntity;
import com.santre.macro.benefits.domain.entity.CityEntity;
import com.santre.macro.benefits.domain.entity.ProvinceEntity;

import java.util.List;
import java.util.Optional;

public interface BenefitRegionService {

    List<BenefitRegionEntity> getAllByBenefit(BenefitEntity benefit);

    Optional<BenefitRegionEntity> getById(Long id);

    Optional<BenefitRegionEntity> getByBenefitProvinceCity(
            BenefitEntity benefit,
            Optional<ProvinceEntity> province,
            Optional<CityEntity> city
    );

    BenefitRegionEntity save(BenefitRegionEntity benefitRegion);

    void saveAll(List<BenefitRegionEntity> benefitsRegions);

    void delete(Long id);

}
