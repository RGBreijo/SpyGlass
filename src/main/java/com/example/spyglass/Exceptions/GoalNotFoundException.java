package com.example.spyglass.Exceptions;

public class GoalNotFoundException extends RuntimeException {
    public GoalNotFoundException(Long goaltId) {
        super("Goal" + goaltId + " not found");
    }
}
