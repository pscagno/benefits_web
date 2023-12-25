package com.santre.macro.benefits.domain.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import lombok.Builder;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "Categories")
public class CategoryEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Column(length = 200, nullable = false)
    private String name;

    @Column(nullable = false)
    private int orderInMenu;

    @NotEmpty
    @Column(length = 200, nullable = false)
    private byte[] imageHeader;

    @NotEmpty
    @Column(length = 200, nullable = false)
    private byte[] imageHeaderMobile;

    @NotEmpty
    @Column(length = 200, nullable = false)
    private byte[] imageMenu;

    @Column(length = 50)
    private String color;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, mappedBy = "category")
    private List<SubcategoryEntity> subcategories = new ArrayList<>();

    @ManyToMany(mappedBy = "categories")
    private Set<UserEntity> users = new HashSet<>();

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

    public byte[] getImageHeader() {
        return imageHeader;
    }

    public void setImageHeader(byte[] imageHeader) {
        this.imageHeader = imageHeader;
    }

    public byte[] getImageHeaderMobile() {
        return imageHeaderMobile;
    }

    public void setImageHeaderMobile(byte[] imageHeaderMobile) {
        this.imageHeaderMobile = imageHeaderMobile;
    }

    public byte[] getImageMenu() {
        return imageMenu;
    }

    public void setImageMenu(byte[] imageMenu) {
        this.imageMenu = imageMenu;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    @JsonIgnore
    public List<SubcategoryEntity> getSubcategories() {
        return subcategories;
    }

    public void setSubcategories(List<SubcategoryEntity> subcategories) {
        this.subcategories = subcategories;
    }

    @JsonIgnore
    public Set<UserEntity> getUsers() {
        return users;
    }

    public void setUsers(Set<UserEntity> users) {
        this.users = users;
    }
}
