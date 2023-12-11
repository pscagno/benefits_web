package com.santre.macro.benefits.domain.entity;


import jakarta.persistence.*;

@Entity
@Table(name = "UserBenefitsFavorites")
public class UserBenefitFavoriteEntity {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name="idBenefit", nullable = false)
    private BenefitEntity benefit;

    @ManyToOne
    @JoinColumn(name="idUser", nullable = false)
    private UserEntity user;

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

    public UserEntity getUser() {
        return user;
    }

    public void setUser(UserEntity user) {
        this.user = user;
    }
}
