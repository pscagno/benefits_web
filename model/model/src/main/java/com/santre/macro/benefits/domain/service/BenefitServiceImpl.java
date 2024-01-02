package com.santre.macro.benefits.domain.service;

import com.santre.macro.benefits.domain.entity.CategoryEntity;
import com.santre.macro.benefits.domain.entity.SubcategoryEntity;
import com.santre.macro.benefits.domain.entity.UserEntity;
import com.santre.macro.benefits.domain.repository.BenefitQualificationRepository;
import com.santre.macro.benefits.domain.repository.BenefitRepository;
import com.santre.macro.benefits.domain.entity.BenefitEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Service
public class BenefitServiceImpl implements  BenefitService {

    @Autowired
    BenefitRepository repository;
    @Autowired
    private BenefitQualificationRepository benefitQualificationRepository;

    @Override
    @Transactional(readOnly = true)
    public Page<BenefitEntity> getAll(int page, int size) {
        PageRequest pageable = PageRequest.of(page, size);
        return repository.findAll(pageable);
    }

    @Override
    @Transactional(readOnly = true)
    public Iterable<BenefitEntity> getAll() {
        return repository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Page<BenefitEntity> search(int page, int size, String keyword){
        PageRequest pageable = PageRequest.of(page, size);
        return repository.findBySomeFieldContaining(pageable, keyword.toUpperCase());
    }

    @Override
    @Transactional(readOnly = true)
    public Page<BenefitEntity> getHomeBenefits(UserEntity user, int page, int size) {
        var idProv = user.getCity().getProvince().getId();
        var idCity = user.getCity().getId();
        PageRequest pageable = PageRequest.of(page, size);
        return repository.findByInHomeAndRegion(pageable, idCity, idProv);
    }

    @Override
    @Transactional(readOnly = true)
    public Page<BenefitEntity> getUserFavoriteBenefits(Long idUser, int page, int size) {
        PageRequest pageable = PageRequest.of(page, size);
        return repository.findByUserFavorites(pageable, idUser);
    }

    @Override
    @Transactional(readOnly = true)
    public Page<BenefitEntity> getBySubcategory(UserEntity user, SubcategoryEntity subcategory, int page, int size) {
        PageRequest pageable = PageRequest.of(page, size);
        return repository.findBySubcategoryAndRegion(
                pageable,
                subcategory.getId(),
                user.getCity().getId(),
                user.getCity().getProvince().getId()
        );
    }

    @Override
    @Transactional(readOnly = true)
    public List<BenefitEntity> getBySubcategory(SubcategoryEntity subcategory) {
        return repository.findBySubcategory(subcategory);
    }

    @Override
    @Transactional(readOnly = true)
    public Page<BenefitEntity> getByCategory(UserEntity user, CategoryEntity category, int page, int size) {
        PageRequest pageable = PageRequest.of(page, size);
        return repository.findByCategoryAndRegion(
                pageable,
                category.getId(),
                user.getCity().getId(),
                user.getCity().getProvince().getId()
        );
    }

    @Override
    @Transactional(readOnly = true)
    public List<BenefitEntity> getByCategory(CategoryEntity category) {
        return repository.findByCategory(category.getId());
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<BenefitEntity> getById(Long id) {
        return repository.findById(id);
    }

    @Override
    @Transactional
    public BenefitEntity save(BenefitEntity benefit) {
        return repository.save(benefit);
    }

    @Override
    @Transactional
    public void delete(Long id) {
        var benefitOpt = repository.findById(id);
        if (benefitOpt.isPresent()){
            var qualifications = benefitOpt.get().getQualifications();
            benefitQualificationRepository.deleteAll(qualifications);
        }
        repository.deleteById(id);
    }

}
