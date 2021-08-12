package com.example.spyglass.Controllers;

import com.example.spyglass.Exceptions.GoalAlreadyExistsExeption;
import com.example.spyglass.Exceptions.GoalNotFoundException;
import com.example.spyglass.Model.Goal;
import com.example.spyglass.Services.GoalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users/{username}/goals")
public class GoalsController {

    public final GoalService goalService;

    @Autowired
    public GoalsController(GoalService goalService){
        this.goalService = goalService;
    }

    @PostMapping
    @CrossOrigin
    public void creatGoal(@PathVariable String username, @RequestBody Goal newGoal) throws GoalAlreadyExistsExeption
    {
         goalService.createGoal(username, newGoal);
    }

    @GetMapping
    @CrossOrigin
    public List<Goal> getAllGoals(@PathVariable String username) {
        return goalService.getAllGoals(username);
    }

    @GetMapping("/{goalId}")
    @CrossOrigin
    public Goal findGoal(@PathVariable Long goalId) throws GoalNotFoundException {
        return goalService.findGoal(goalId);
    }

   @DeleteMapping("/{goalId}")
   @CrossOrigin
   public Boolean deleteGoal(@PathVariable Long goalId) throws GoalNotFoundException{
        return goalService.deleteGoal(goalId);
   }

   @PutMapping("/{goalId}")
   @CrossOrigin
   public Boolean updateGoal(@PathVariable Long goalId, @RequestBody Goal updatedGoal) throws GoalNotFoundException{
        return goalService.updateGoal(goalId,updatedGoal);

   }
}

