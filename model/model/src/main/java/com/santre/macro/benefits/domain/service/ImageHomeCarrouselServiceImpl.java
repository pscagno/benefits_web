package com.santre.macro.benefits.domain.service;

import com.santre.macro.benefits.domain.entity.ImageHomeCarrouselEntity;
import com.santre.macro.benefits.domain.repository.ImageHomeCarrouselRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class ImageHomeCarrouselServiceImpl implements  ImageHomeCarrouselService {

    @Autowired
    ImageHomeCarrouselRepository repository;

    @Override
    @Transactional(readOnly = true)
    public List<ImageHomeCarrouselEntity> getAll() {
        return (List<ImageHomeCarrouselEntity>)repository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<ImageHomeCarrouselEntity> getById(Long id) {
        return repository.findById(id);
    }

    @Override
    @Transactional
    public ImageHomeCarrouselEntity save(ImageHomeCarrouselEntity user) {
        return repository.save(user);
    }

    @Override
    @Transactional
    public ImageHomeCarrouselEntity create(ImageHomeCarrouselEntity user) {
        //manage password
        return repository.save(user);
    }

    @Override
    @Transactional
    public void delete(Long id) {
        repository.deleteById(id);
    }


}
