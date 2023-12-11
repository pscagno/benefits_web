package com.santre.macro.benefits.domain.service;

import com.santre.macro.benefits.domain.entity.BenefitEntity;
import com.santre.macro.benefits.domain.entity.BenefitQualificationEntity;
import com.santre.macro.benefits.domain.entity.UserEntity;
import com.santre.macro.benefits.domain.repository.BenefitQualificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class BenefitQualificationServiceImpl implements  BenefitQualificationService {

    @Autowired
    BenefitQualificationRepository repository;

    @Override
    @Transactional(readOnly = true)
    public List<BenefitQualificationEntity> getAllByBenefit(BenefitEntity benefit) {
        return (List<BenefitQualificationEntity>)repository.findByBenefit(benefit);
    }

    @Override
    public Optional<BenefitQualificationEntity> getByBenefitAndUser(BenefitEntity benefit, UserEntity user) {
        return repository.findByBenefitAndUser(benefit, user);
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<BenefitQualificationEntity> getById(Long id) {
        return repository.findById(id);
    }

    @Override
    @Transactional
    public BenefitQualificationEntity save(BenefitQualificationEntity benefitQualification) {
        return repository.save(benefitQualification);
    }

    @Override
    @Transactional
    public void delete(Long id) {
        repository.deleteById(id);
    }

}
