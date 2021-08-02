package com.example.spyglass.Services;

import com.example.spyglass.Repositories.GoalsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GoalService {

    @Autowired
    GoalsRepository goalsRepository;

}
