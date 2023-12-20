package com.santre.macro.benefits.domain.service;

import com.santre.macro.benefits.domain.entity.CityEntity;
import com.santre.macro.benefits.domain.entity.ProvinceEntity;
import com.santre.macro.benefits.domain.repository.CityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class CityServiceImpl implements  CityService {

    @Autowired
    CityRepository repository;

    @Override
    @Transactional(readOnly = true)
    public List<CityEntity> getAll() {
        return (List<CityEntity>)repository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public List<CityEntity> getAllByProvince(ProvinceEntity province){
        return repository.findByProvince(province);
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<CityEntity> getById(Long id) {
        return repository.findById(id);
    }

    @Override
    @Transactional
    public CityEntity save(CityEntity city) {
        return repository.save(city);
    }

    @Override
    @Transactional
    public void delete(Long id){
        repository.deleteById(id);
    }
}
