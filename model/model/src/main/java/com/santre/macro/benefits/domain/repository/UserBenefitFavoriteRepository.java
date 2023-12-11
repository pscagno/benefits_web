package com.santre.macro.benefits.domain.repository;

import com.santre.macro.benefits.domain.entity.BenefitEntity;
import com.santre.macro.benefits.domain.entity.UserBenefitFavoriteEntity;
import com.santre.macro.benefits.domain.entity.UserEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;


public interface UserBenefitFavoriteRepository extends CrudRepository<UserBenefitFavoriteEntity, Long> {

    Optional<UserBenefitFavoriteEntity> findByUserAndBenefit(UserEntity user, BenefitEntity entity);

}
