package com.example.spyglass.Exceptions;

public class GoalAlreadyExistsExeption extends RuntimeException{
    public GoalAlreadyExistsExeption(Long goalId) {
        super("Goal " + goalId + " already exist in db");
    }
}
