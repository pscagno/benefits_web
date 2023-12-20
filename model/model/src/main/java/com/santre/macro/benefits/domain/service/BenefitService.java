package com.santre.macro.benefits.domain.service;

import com.santre.macro.benefits.domain.entity.BenefitEntity;
import com.santre.macro.benefits.domain.entity.CategoryEntity;
import com.santre.macro.benefits.domain.entity.SubcategoryEntity;
import com.santre.macro.benefits.domain.entity.UserEntity;
import jakarta.validation.constraints.Null;
import org.springframework.data.domain.Page;

import java.util.List;
import java.util.Optional;

public interface BenefitService {

    Page<BenefitEntity> getAll(int page, int size);

    Page<BenefitEntity> search(int page, int size, String keyword);

    Page<BenefitEntity> getHomeBenefits(UserEntity user, int page, int size);

    Page<BenefitEntity> getUserFavoriteBenefits(Long idUser, int page, int size);

    Page<BenefitEntity> getBySubcategory(UserEntity user, SubcategoryEntity subcategory, int page, int size);

    List<BenefitEntity> getBySubcategory(SubcategoryEntity subcategory);

    Page<BenefitEntity> getByCategory(UserEntity user, CategoryEntity category, int page, int size);

    List<BenefitEntity> getByCategory(CategoryEntity category);

    Optional<BenefitEntity> getById(Long id);

    BenefitEntity save(BenefitEntity benefit);

    void delete(Long id);

}
