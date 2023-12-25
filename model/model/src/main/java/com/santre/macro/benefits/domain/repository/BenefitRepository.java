package com.santre.macro.benefits.domain.repository;

import com.santre.macro.benefits.domain.entity.BenefitEntity;
import com.santre.macro.benefits.domain.entity.SubcategoryEntity;
import feign.Param;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;


public interface BenefitRepository extends CrudRepository<BenefitEntity, Long>{

    @Query("SELECT b FROM BenefitEntity b " +
            "Where Upper(b.title) like %:keyword% " +
            "or Upper(b.text) like %:keyword% " +
            "or Upper(b.description) like %:keyword% "
    )
    Page<BenefitEntity> findBySomeFieldContaining(Pageable pageable, @Param("provinceId") String keyword);

    Page<BenefitEntity> findAll(Pageable pageable);

    List<BenefitEntity> findBySubcategory(SubcategoryEntity subcategory);

    @Query("SELECT b FROM BenefitEntity b " +
            "inner join SubcategoryEntity s on b.subcategory.id = s.id " +
            "left join BenefitRegionEntity r on b.id = r.benefit.id " +
            "Where s.id = :subcategoryId " +
            "and (r is null or r.city.id = :cityId " +
            "or (r.province.id = :provinceId and r.city is null))"
    )
    Page<BenefitEntity> findBySubcategoryAndRegion(
            Pageable pageable,
            @Param("subcategoryId") Long subcategoryId,
            @Param("cityId") Long cityId,
            @Param("provinceId") Long provinceId
    );

    @Query("SELECT b FROM BenefitEntity b inner join SubcategoryEntity s on b.subcategory.id = s.id " +
            "Where s.category.id = :categoryId")
    List<BenefitEntity> findByCategory(Long categoryId);

    @Query("SELECT b FROM BenefitEntity b " +
            "inner join SubcategoryEntity s on b.subcategory.id = s.id " +
            "left join BenefitRegionEntity r on b.id = r.benefit.id " +
            "Where s.category.id = :categoryId " +
            "and (r is null or r.city.id = :cityId " +
            "or (r.province.id = :provinceId and r.city is null))"
    )
    Page<BenefitEntity> findByCategoryAndRegion(
            Pageable pageable,
            @Param("categoryId") Long categoryId,
            @Param("cityId") Long cityId,
            @Param("provinceId") Long provinceId
    );

    Page<BenefitEntity> findByInHome(Pageable pageable, boolean inHome);

    @Query("SELECT b FROM BenefitEntity b " +
            "left join BenefitRegionEntity r on b.id = r.benefit.id " +
            "Where b.inHome = True " +
            "and (r is null or r.city.id = :cityId " +
            "or (r.province.id = :provinceId and r.city is null))")
    Page<BenefitEntity> findByInHomeAndRegion(Pageable pageable, @Param("cityId") Long cityId, @Param("provinceId") Long provinceId);

    @Query("SELECT b FROM BenefitEntity b inner join UserBenefitFavoriteEntity f on b.id = f.benefit.id " +
            "Where f.user.id = :userId")
    Page<BenefitEntity> findByUserFavorites(Pageable pageable, @Param("userId") Long userId);
}
