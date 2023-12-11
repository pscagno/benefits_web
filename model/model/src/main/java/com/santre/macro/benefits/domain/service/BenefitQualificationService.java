package com.santre.macro.benefits.domain.service;

import com.santre.macro.benefits.domain.entity.BenefitEntity;
import com.santre.macro.benefits.domain.entity.BenefitQualificationEntity;
import com.santre.macro.benefits.domain.entity.UserEntity;

import java.util.List;
import java.util.Optional;

public interface BenefitQualificationService {

    List<BenefitQualificationEntity> getAllByBenefit(BenefitEntity benefit);

    Optional<BenefitQualificationEntity> getByBenefitAndUser(BenefitEntity benefit, UserEntity user);

    Optional<BenefitQualificationEntity> getById(Long id);

    BenefitQualificationEntity save(BenefitQualificationEntity benefitQualification);

    void delete(Long id);

}
