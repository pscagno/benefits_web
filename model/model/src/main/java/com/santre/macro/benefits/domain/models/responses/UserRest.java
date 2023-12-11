package com.santre.macro.benefits.domain.models.responses;

import com.santre.macro.benefits.domain.entity.CityEntity;
import lombok.Data;

@Data
public class UserRest {
    private long id;
    private String name;
    private String email;
    private boolean isAdmin;

    private CityEntity city;
}
