package com.santre.macro.benefits.domain.service;

import com.santre.macro.benefits.domain.entity.BenefitEntity;
import com.santre.macro.benefits.domain.entity.UserBenefitFavoriteEntity;
import com.santre.macro.benefits.domain.entity.UserEntity;

import java.util.List;
import java.util.Optional;

public interface UserBenefitFavoriteService {

    List<UserBenefitFavoriteEntity> getAll();

    Optional<UserBenefitFavoriteEntity> getById(Long id);

    UserBenefitFavoriteEntity save(UserBenefitFavoriteEntity user);

    UserBenefitFavoriteEntity create(UserBenefitFavoriteEntity user);

    void delete(Long id);

    Optional<UserBenefitFavoriteEntity> getByUserAndBenefit(UserEntity user, BenefitEntity benefit);

}
