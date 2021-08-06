package com.example.spyglass.Model;

import javax.persistence.*;
import java.util.Date;


@Entity
public class Goals {
    private int monthlyDepo;
    private String goalName;
    private String reason;
    private Date targetDate;
    private int target$Amount;
    private int currentGoal;
    private int initDeposit;
    private int priority;
    @ManyToOne()
    private User user;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long goalId;

    public Goals() {
    }


    public Goals(String goalName,String reason, Date targetDate, int target$Amount,int monthlyDepo, int currentGoal, User user, int initDeposit, int priority, Long goalId) {
        this.reason = reason;
        this.goalName = goalName;
        this.targetDate = targetDate;
        this.target$Amount = target$Amount;
        this.currentGoal = currentGoal;
        this.initDeposit = initDeposit;
        this.priority = priority;
        this.user = user;
        this.goalId = goalId;
        this.monthlyDepo = monthlyDepo;
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

    public int getTarget$Amount() {
        return target$Amount;
    }

    public void setTarget$Amount(int target$Amount) {
        this.target$Amount = target$Amount;
    }

    public int getCurrentGoal() {
        return currentGoal;
    }

    public void setCurrentGoal(int currentGoal) {
        this.currentGoal = currentGoal;
    }

    public int getInitDeposit() {
        return initDeposit;
    }

    public void setInitDeposit(int initDeposit) {
        this.initDeposit = initDeposit;
    }

    public int getPriority() {
        return priority;
    }

    public void setPriority(int priority) {
        this.priority = priority;
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

    public int getMonthlyDepo() {
        return monthlyDepo;
    }

    public void setMonthlyDepo(int monthlyDepo) {
        this.monthlyDepo = monthlyDepo;
    }
}
