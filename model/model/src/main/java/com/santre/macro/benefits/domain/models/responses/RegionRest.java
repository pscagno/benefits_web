package com.santre.macro.benefits.domain.models.responses;

public class RegionRest {

    private Long id;
    private String Province;
    private Long IDProvince;
    private String City;
    private Long IDCity;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProvince() {
        return Province;
    }

    public void setProvince(String province) {
        Province = province;
    }

    public Long getIDProvince() {
        return IDProvince;
    }

    public void setIDProvince(Long IDProvince) {
        this.IDProvince = IDProvince;
    }

    public String getCity() {
        return City;
    }

    public void setCity(String city) {
        City = city;
    }

    public Long getIDCity() {
        return IDCity;
    }

    public void setIDCity(Long IDCity) {
        this.IDCity = IDCity;
    }
}
