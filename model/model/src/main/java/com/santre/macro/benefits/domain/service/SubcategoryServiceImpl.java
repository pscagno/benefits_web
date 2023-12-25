package com.santre.macro.benefits.domain.service;

import com.santre.macro.benefits.domain.repository.SubcategoryRepository;
import com.santre.macro.benefits.domain.entity.SubcategoryEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class SubcategoryServiceImpl implements  SubcategoryService {

    @Autowired
    SubcategoryRepository repository;

    @Override
    @Transactional(readOnly = true)
    public List<SubcategoryEntity> getAll() {
        return (List<SubcategoryEntity>)repository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<SubcategoryEntity> getById(Long id) {
        return repository.findById(id);
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<SubcategoryEntity> getByName(String name){ return repository.findByName(name); }

    @Override
    @Transactional
    public SubcategoryEntity save(SubcategoryEntity subcategory) {
        return repository.save(subcategory);
    }

    @Override
    @Transactional
    public void delete(Long id) {
        repository.deleteById(id);
    }
}
