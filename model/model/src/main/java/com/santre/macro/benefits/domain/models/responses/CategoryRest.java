package com.santre.macro.benefits.domain.models.responses;

import com.santre.macro.benefits.domain.entity.SubcategoryEntity;
import jakarta.persistence.Tuple;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class CategoryRest {
    private Long id;
    private String name;
    private int orderInMenu;
    private String color;
    private byte[] imageMenu;
    private List<SubcategoryEntity> subcategories = new ArrayList<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getOrderInMenu() {
        return orderInMenu;
    }

    public void setOrderInMenu(int orderInMenu) {
        this.orderInMenu = orderInMenu;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public byte[] getImageMenu() {
        return imageMenu;
    }

    public void setImageMenu(byte[] imageMenu) {
        this.imageMenu = imageMenu;
    }

    public List<SubcategoryEntity> getSubcategories() {
        return this.subcategories;
    }

    public void setSubcategories(List<SubcategoryEntity> subcategories) {
        this.subcategories = subcategories;
    }
}
