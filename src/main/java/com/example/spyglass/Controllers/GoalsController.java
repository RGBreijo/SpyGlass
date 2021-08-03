package com.example.spyglass.Controllers;

import com.example.spyglass.Exceptions.GoalAlreadyExistsExeption;
import com.example.spyglass.Exceptions.GoalNotFoundException;
import com.example.spyglass.Model.Goals;
import com.example.spyglass.Services.GoalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/Goals")
public class GoalsController {

    public final GoalService goalService;
    @Autowired
    public GoalsController(GoalService goalService){
        this.goalService = goalService;
    }
    @PostMapping("/username/goal")
    @CrossOrigin
    public Goals creatGoal(Goals newGoal) throws GoalAlreadyExistsExeption {
        return goalService.creatGoal(newGoal);
    }

    @GetMapping("/")
    @CrossOrigin
    public List<Goals> getAllGoals() {
        return goalService.getAllGoals();
    }

    @GetMapping(value = "/username/{goalId}")
    @CrossOrigin
    public Goals findGoal(@PathVariable Long goalId) throws GoalNotFoundException {
        return goalService.findGoal(goalId);
    }

   @DeleteMapping("/username/delete/{goalId}")
   @CrossOrigin
   public Boolean deleteGoal(@PathVariable Long goalId) throws GoalNotFoundException{
        return goalService.deleteGoal(goalId);
   }

   @PutMapping("/username/update/{goalId}")
    @CrossOrigin
    public Boolean updateGoal(@PathVariable Long goalId, @RequestBody Goals updatedGoal) throws GoalNotFoundException{
        return goalService.updateGoal(goalId,updatedGoal);

   }


}