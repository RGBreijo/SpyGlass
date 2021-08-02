package com.example.spyglass.Controllers;

import com.example.spyglass.Services.GoalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Goals")
public class GoalsController {

    @Autowired
    GoalService goalService;


}
