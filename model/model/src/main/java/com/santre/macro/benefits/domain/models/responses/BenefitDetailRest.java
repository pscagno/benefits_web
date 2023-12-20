package com.santre.macro.benefits.domain.models.responses;

import lombok.Data;

import java.util.Date;

@Data
public class BenefitDetailRest {
    private Long id;
    private String title;
    private String description;
    private String text;
    private boolean inHome;
    private String subcategoryName;
    private Long subcategoryId;
    private String categoryName;
    private String categoryColor;
    private Long categoryId;
    private String userCreation;
    private Date dateCreation;
    private Date dateExpiration;
    private boolean userFavorite;
    private String link;
    private String region;
    private int Qualification;
    private byte[] imageHeader;
    private byte[] imageHeaderMobile;
    private byte[] imageDetails1;
    private byte[] imageDetails2;
    private byte[] imageList;
    private double averageQualification;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public boolean isInHome() {
        return inHome;
    }

    public void setInHome(boolean inHome) {
        this.inHome = inHome;
    }

    public String getSubcategoryName() {
        return subcategoryName;
    }

    public void setSubcategoryName(String subcategoryName) {
        this.subcategoryName = subcategoryName;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public String getUserCreation() {
        return userCreation;
    }

    public void setUserCreation(String userCreation) {
        this.userCreation = userCreation;
    }

    public Date getDateCreation() {
        return dateCreation;
    }

    public void setDateCreation(Date dateCreation) {
        this.dateCreation = dateCreation;
    }

    public Date getDateExpiration() {
        return dateExpiration;
    }

    public void setDateExpiration(Date dateExpiration) {
        this.dateExpiration = dateExpiration;
    }

    public int getQualification() {
        return Qualification;
    }

    public void setQualification(int qualification) {
        Qualification = qualification;
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

    public byte[] getImageDetails1() {
        return imageDetails1;
    }

    public void setImageDetails1(byte[] imageDetails1) {
        this.imageDetails1 = imageDetails1;
    }

    public byte[] getImageDetails2() {
        return imageDetails2;
    }

    public void setImageDetails2(byte[] imageDetails2) {
        this.imageDetails2 = imageDetails2;
    }

    public byte[] getImageList() {
        return imageList;
    }

    public void setImageList(byte[] imageList) {
        this.imageList = imageList;
    }

    public boolean isUserFavorite() {
        return userFavorite;
    }

    public void setUserFavorite(boolean userFavorite) {
        this.userFavorite = userFavorite;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public String getCategoryColor() {
        return categoryColor;
    }

    public void setCategoryColor(String categoryColor) {
        this.categoryColor = categoryColor;
    }

    public Long getSubcategoryId() {
        return subcategoryId;
    }

    public void setSubcategoryId(Long subcategoryId) {
        this.subcategoryId = subcategoryId;
    }

    public Long getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }

    public double getAverageQualification() {
        return averageQualification;
    }

    public void setAverageQualification(double averageQualification) {
        this.averageQualification = averageQualification;
    }

}
