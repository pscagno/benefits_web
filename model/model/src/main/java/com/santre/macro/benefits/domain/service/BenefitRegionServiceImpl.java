package com.santre.macro.benefits.domain.service;

import com.santre.macro.benefits.domain.entity.*;
import com.santre.macro.benefits.domain.repository.BenefitQualificationRepository;
import com.santre.macro.benefits.domain.repository.BenefitRegionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class BenefitRegionServiceImpl implements  BenefitRegionService {

    @Autowired
    BenefitRegionRepository repository;

    @Override
    @Transactional(readOnly = true)
    public List<BenefitRegionEntity> getAllByBenefit(BenefitEntity benefit) {
        return (List<BenefitRegionEntity>)repository.findByBenefit(benefit);
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<BenefitRegionEntity> getById(Long id) {
        return repository.findById(id);
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<BenefitRegionEntity> getByBenefitProvinceCity(
            BenefitEntity benefit,
            Optional<ProvinceEntity> province,
            Optional<CityEntity> city
    ) {
        return repository.findByBenefitAndProvinceAndCity(benefit, province, city);
    }

    @Override
    @Transactional
    public BenefitRegionEntity save(BenefitRegionEntity benefitRegion) {
        return repository.save(benefitRegion);
    }

    @Override
    @Transactional
    public void saveAll(List<BenefitRegionEntity> benefitsRegions) {
        benefitsRegions.forEach(benefitRegionEntity -> repository.save(benefitRegionEntity));
    }

    @Override
    @Transactional
    public void delete(Long id) {
        repository.deleteById(id);
    }

}
