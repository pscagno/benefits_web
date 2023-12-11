package com.santre.macro.benefits.domain.service;

import com.santre.macro.benefits.domain.entity.ProvinceEntity;
import com.santre.macro.benefits.domain.repository.ProvinceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class ProvinceServiceImpl implements  ProvinceService {

    @Autowired
    ProvinceRepository repository;

    @Override
    @Transactional(readOnly = true)
    public List<ProvinceEntity> getAll() {
        return (List<ProvinceEntity>)repository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<ProvinceEntity> getById(Long id) {
        return repository.findById(id);
    }

    @Override
    @Transactional
    public ProvinceEntity save(ProvinceEntity city) {
        return repository.save(city);
    }

    @Override
    @Transactional
    public void delete(Long id) {
        repository.deleteById(id);
    }
}
