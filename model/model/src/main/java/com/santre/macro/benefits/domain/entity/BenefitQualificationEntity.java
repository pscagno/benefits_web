package com.santre.macro.benefits.domain.entity;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "BenefitQualifications")
public class BenefitQualificationEntity {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    public Long id;

    @Column(nullable = false)
    public int stars;

    @Column(length=1000, nullable = false)
    public String comments;

    @Column(nullable = false)
    public Date date;

    @ManyToOne
    @JoinColumn(name="idUser", nullable = false)
    public UserEntity user;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="idBenefit", nullable = false)
    public BenefitEntity benefit;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getStars() {
        return stars;
    }

    public void setStars(int stars) {
        this.stars = stars;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public UserEntity getUser() {
        return user;
    }

    public void setUser(UserEntity user) {
        this.user = user;
    }

    public BenefitEntity getBenefit() {
        return benefit;
    }

    public void setBenefit(BenefitEntity benefit) {
        this.benefit = benefit;
    }
}
