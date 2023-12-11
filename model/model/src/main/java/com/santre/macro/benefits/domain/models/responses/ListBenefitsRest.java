package com.santre.macro.benefits.domain.models.responses;

import java.util.List;

public class ListBenefitsRest {

    List<BenefitRest> benefits;

    int nextPage;

    public List<BenefitRest> getBenefits() {
        return benefits;
    }

    public void setBenefits(List<BenefitRest> benefits) {
        this.benefits = benefits;
    }

    public int getNextPage() {
        return nextPage;
    }

    public void setNextPage(int nextPage) {
        this.nextPage = nextPage;
    }
}
