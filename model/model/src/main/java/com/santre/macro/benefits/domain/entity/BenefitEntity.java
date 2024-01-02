package com.santre.macro.benefits.domain.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.santre.macro.benefits.util.ImageUtil;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;

import javax.swing.plaf.synth.Region;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Entity
@Table(name = "Benefits")
public class BenefitEntity {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Column(length=200, nullable = false)
    private String title;

    @NotBlank
    @Column(length=400, nullable = false)
    private String description;

    @NotBlank
    @Column(length=2000)
    private String text;

    @Column(nullable = false)
    private boolean inHome = false;

    @ManyToOne
    @JoinColumn(name="idSubcategory", nullable = false)
    private SubcategoryEntity subcategory;

    @Column(nullable = false)
    private String userCreation;

    @Column(nullable = false)
    private Date dateCreation = new Date();

    private Date dateExpiration;

    @Column(nullable = true)
    private String link;

    @NotEmpty
    @Lob
    @Column(length = 2000)
    @Basic(fetch=FetchType.LAZY)
    private byte[] imageHeader;

    @NotEmpty
    @Lob
    @Column(length = 2000)
    @Basic(fetch=FetchType.LAZY)
    private byte[] imageHeaderMobile;

    @NotEmpty
    @Lob
    @Column(length = 2000)
    @Basic(fetch=FetchType.LAZY)
    private byte[] imageList;

    @Lob
    @Column(length = 2000)
    @Basic(fetch=FetchType.LAZY)
    private byte[] imageDetails1;

    @Lob
    @Column(length = 2000)
    @Basic(fetch=FetchType.LAZY)
    private byte[] imageDetails2;

    @OneToMany(mappedBy = "benefit")
    private List<BenefitQualificationEntity> qualifications = new ArrayList<>();

    @Transient
    private double averageQualification;

    public String getRegionsDescription(){
        StringBuilder output= new StringBuilder();
        for (BenefitRegionEntity region:this.getRegions()) {
            if (region.getProvince() != null) {
                output.append(region.getProvince().getName());
            }
            if (region.getCity() != null) {
                output.append(" / ");
                output.append(region.getCity().getName());
            }
            output.append(" - ");
        }
        var regions = output.toString();
        if (regions.isEmpty()) {
            regions = "Argentina";
        }
        return regions;
    }

    @JsonIgnore
    public List<BenefitQualificationEntity> getQualifications() {
        return qualifications;
    }

    public void setQualifications(List<BenefitQualificationEntity> qualifications) {
        this.qualifications = qualifications;
    }

    public double getAverageQualification() {
        if (this.qualifications.isEmpty()) {
            return 0.0; // or any default value
        }

        double totalQualification = 0;
        for (BenefitQualificationEntity qualification : qualifications) {
            totalQualification += qualification.getStars();
        }

        this.averageQualification = totalQualification / qualifications.size();
        return this.averageQualification;
    }

    @OneToMany(cascade=CascadeType.ALL, orphanRemoval = true, mappedBy = "benefit")
    private List<BenefitRegionEntity> benefitRegions = new ArrayList<>();

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

    public SubcategoryEntity getSubcategory() {
        return subcategory;
    }

    public void setSubcategory(SubcategoryEntity subcategory) {
        this.subcategory = subcategory;
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

    public byte[] getImageHeader() {
        return ImageUtil.decompressImage(imageHeader);
    }

    public void setImageHeader(byte[] imageHeader) {
        this.imageHeader = ImageUtil.compressImage(imageHeader);
    }

    public byte[] getImageHeaderMobile() {
        return imageHeaderMobile;
    }

    public void setImageHeaderMobile(byte[] imageHeaderMobile) {
        this.imageHeaderMobile = imageHeaderMobile;
    }

    public byte[] getImageList() {
        return imageList;
    }

    public void setImageList(byte[] imageList) {
        this.imageList = imageList;
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

    @JsonIgnore
    public List<BenefitRegionEntity> getRegions() {
        return this.benefitRegions;
    }

    public void setBenefitRegions(List<BenefitRegionEntity> benefitRegions) {
        this.benefitRegions = benefitRegions;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }
}
