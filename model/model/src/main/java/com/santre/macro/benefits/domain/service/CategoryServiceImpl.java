package com.santre.macro.benefits.domain.service;

import com.santre.macro.benefits.domain.repository.CategoryRepository;
import com.santre.macro.benefits.domain.entity.CategoryEntity;
import com.santre.macro.benefits.domain.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.List;

@Service
public class CategoryServiceImpl implements  CategoryService {

    @Autowired
    CategoryRepository repository;

    @Autowired
    UserRepository userRepository;

    @Override
    @Transactional(readOnly = true)
    public List<CategoryEntity> getAll() {
        return (List<CategoryEntity>)repository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<CategoryEntity> getById(Long id) {
        return repository.findById(id);
    }

    @Override
    @Transactional
    public CategoryEntity save(CategoryEntity category) {
        return repository.save(category);
    }

    @Override
    @Transactional
    public void delete(Long id) {
        CategoryEntity category = repository.findById(id).orElseThrow();
        category.getUsers().removeAll(category.getUsers());
        //repository.save(category);
        repository.delete(category);
    }

}
