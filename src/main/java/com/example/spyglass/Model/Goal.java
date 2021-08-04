package com.example.spyglass.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Date;


@Entity
public class Goal
{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long goalId;

    private String goalName;
    private String reason;
    private Date targetDate;

    private double targetAmount;
    private double initialDeposit;

    @JsonIgnore
    @ManyToOne()
    private User user;

    public Goal()
    {
    }

    public Goal(String goalName, String reason, Date targetDate, double target$Amount, User user, double initialDeposit, Long goalId) {
        this.reason = reason;
        this.goalName = goalName;
        this.targetDate = targetDate;
        this.targetAmount = target$Amount;
        this.initialDeposit = initialDeposit;
        this.user = user;
        this.goalId = goalId;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public String getGoalName() {
        return goalName;
    }

    public void setGoalName(String goalName) {
        this.goalName = goalName;
    }

    public Date getTargetDate() {
        return targetDate;
    }

    public void setTargetDate(Date targetDate) {
        this.targetDate = targetDate;
    }

    public double getTargetAmount() {
        return targetAmount;
    }

    public void setTargetAmount(double target$Amount) {
        this.targetAmount = target$Amount;
    }


    public double getInitialDeposit() {
        return initialDeposit;
    }

    public void setInitialDeposit(double initDeposit) {
        this.initialDeposit = initDeposit;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Long getGoalId() {
        return goalId;
    }

    public void setGoalId(Long goalId) {
        this.goalId = goalId;
    }
}