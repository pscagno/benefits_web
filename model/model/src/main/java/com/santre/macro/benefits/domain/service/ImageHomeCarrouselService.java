package com.santre.macro.benefits.domain.service;

import com.santre.macro.benefits.domain.entity.ImageHomeCarrouselEntity;

import java.util.List;
import java.util.Optional;

public interface ImageHomeCarrouselService {

    List<ImageHomeCarrouselEntity> getAll();

    Optional<ImageHomeCarrouselEntity> getById(Long id);

    ImageHomeCarrouselEntity save(ImageHomeCarrouselEntity image);

    ImageHomeCarrouselEntity create(ImageHomeCarrouselEntity image);

    void delete(Long id);

}
