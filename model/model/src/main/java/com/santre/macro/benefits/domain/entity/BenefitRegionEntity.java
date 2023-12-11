package com.santre.macro.benefits.domain.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "BenefitRegion", uniqueConstraints = {
        @UniqueConstraint(columnNames = {"idBenefit", "idProvince", "idCity"})
})
public class BenefitRegionEntity {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name="idBenefit", nullable = false)
    public BenefitEntity benefit;

    @ManyToOne
    @JoinColumn(name="idProvince", nullable = true)
    public ProvinceEntity province;

    @ManyToOne
    @JoinColumn(name="idCity", nullable = true)
    public CityEntity city;

    @Transient
    public boolean isFederal(){
        return this.city == null && this.province == null;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public BenefitEntity getBenefit() {
        return benefit;
    }

    public void setBenefit(BenefitEntity benefit) {
        this.benefit = benefit;
    }

    public ProvinceEntity getProvince() {
        return province;
    }

    public void setProvince(ProvinceEntity province) {
        this.province = province;
    }

    public CityEntity getCity() {
        return city;
    }

    public void setCity(CityEntity city) {
        this.city = city;
    }
}
