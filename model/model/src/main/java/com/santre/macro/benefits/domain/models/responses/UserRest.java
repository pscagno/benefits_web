package com.santre.macro.benefits.domain.models.responses;
import java.util.List;

public class UserRest {
    private long id;
    private String firstName;
    private String lastName;
    private String email;
    private String cityName;
    private Long cityId;
    private List<CategoryRest> categories;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCityName() {
        return cityName;
    }

    public void setCityName(String cityName) {
        this.cityName = cityName;
    }

    public Long getCityId() {
        return cityId;
    }

    public void setCityId(Long cityId) {
        this.cityId = cityId;
    }

    public List<CategoryRest> getCategories() {
        return categories;
    }

    public void setCategories(List<CategoryRest> categories) {
        this.categories = categories;
    }
}
