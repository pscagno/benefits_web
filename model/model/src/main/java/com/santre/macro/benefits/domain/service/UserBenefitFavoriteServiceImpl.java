package com.santre.macro.benefits.domain.service;

import com.santre.macro.benefits.domain.entity.BenefitEntity;
import com.santre.macro.benefits.domain.entity.UserBenefitFavoriteEntity;
import com.santre.macro.benefits.domain.entity.UserEntity;
import com.santre.macro.benefits.domain.repository.UserBenefitFavoriteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class UserBenefitFavoriteServiceImpl implements  UserBenefitFavoriteService {

    @Autowired
    UserBenefitFavoriteRepository repository;

    @Override
    @Transactional(readOnly = true)
    public List<UserBenefitFavoriteEntity> getAll() {
        return (List<UserBenefitFavoriteEntity>)repository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<UserBenefitFavoriteEntity> getById(Long id) {
        return repository.findById(id);
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<UserBenefitFavoriteEntity> getByUserAndBenefit(UserEntity user, BenefitEntity benefit) {
        return repository.findByUserAndBenefit(user, benefit);
    }

    @Override
    @Transactional
    public UserBenefitFavoriteEntity save(UserBenefitFavoriteEntity user) {
        return repository.save(user);
    }

    @Override
    @Transactional
    public UserBenefitFavoriteEntity create(UserBenefitFavoriteEntity user) {
        //manage password
        return repository.save(user);
    }

    @Override
    @Transactional
    public void delete(Long id) {
        repository.deleteById(id);
    }

}
