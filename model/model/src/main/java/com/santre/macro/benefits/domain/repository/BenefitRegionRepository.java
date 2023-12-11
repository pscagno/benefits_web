package com.santre.macro.benefits.domain.repository;

import com.santre.macro.benefits.domain.entity.*;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface BenefitRegionRepository extends CrudRepository<BenefitRegionEntity, Long> {
    List<BenefitRegionEntity> findByBenefit(BenefitEntity benefit);

    Optional<BenefitRegionEntity> findByBenefitAndProvinceAndCity(
            @Param("benefit") BenefitEntity benefit,
            @Param("province") Optional<ProvinceEntity> province,
            @Param("city") Optional<CityEntity> city);
}
