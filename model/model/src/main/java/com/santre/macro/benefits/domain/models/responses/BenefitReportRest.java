package com.santre.macro.benefits.domain.models.responses;

import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class BenefitReportRest {
    private Long id;
    private String title;
    private String description;
    private String subcategoryName;
    private String categoryName;
    private double averageQualification;
    private double totalQualifications;


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

    public double getAverageQualification() {
        return averageQualification;
    }

    public void setAverageQualification(double averageQualification) {
        this.averageQualification = averageQualification;
    }

    public double getTotalQualifications() {
        return totalQualifications;
    }

    public void setTotalQualifications(double totalQualifications) {
        this.totalQualifications = totalQualifications;
    }
}
