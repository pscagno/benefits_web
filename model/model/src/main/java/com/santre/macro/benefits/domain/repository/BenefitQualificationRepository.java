package com.santre.macro.benefits.domain.repository;

import com.santre.macro.benefits.domain.entity.BenefitEntity;
import com.santre.macro.benefits.domain.entity.BenefitQualificationEntity;
import com.santre.macro.benefits.domain.entity.UserEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface BenefitQualificationRepository extends CrudRepository<BenefitQualificationEntity, Long> {

    List<BenefitQualificationEntity> findByBenefit(BenefitEntity benefit);

    Optional<BenefitQualificationEntity> findByBenefitAndUser(BenefitEntity benefit, UserEntity user);
}
