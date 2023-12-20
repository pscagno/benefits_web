package com.santre.macro.benefits.domain.repository;

import com.santre.macro.benefits.domain.entity.BenefitEntity;
import com.santre.macro.benefits.domain.entity.CityEntity;
import com.santre.macro.benefits.domain.entity.ProvinceEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CityRepository extends CrudRepository<CityEntity, Long> {

    List<CityEntity> findByProvince(ProvinceEntity province);

}
