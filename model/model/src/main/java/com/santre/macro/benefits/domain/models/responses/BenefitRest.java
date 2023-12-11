package com.santre.macro.benefits.domain.models.responses;

import com.santre.macro.benefits.domain.entity.SubcategoryEntity;
import lombok.Data;

import java.util.Date;

@Data
public class BenefitRest {
    private Long id;
    private String title;
    private String description;
    private String text;
    private boolean inHome;
    private String subcategoryName;
    private String userCreation;
    private Date dateCreation;
    private Date dateExpiration;
    private int Qualification;
    private String link;
    private boolean userFavorite;
    private String region;
    private byte[] imageList;

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

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
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

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }
}
