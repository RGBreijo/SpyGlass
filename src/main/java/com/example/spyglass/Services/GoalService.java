
package com.example.spyglass.Services;

import com.example.spyglass.Exceptions.GoalAlreadyExistsExeption;
import com.example.spyglass.Exceptions.GoalNotFoundException;
import com.example.spyglass.Model.User;
import com.example.spyglass.Repositories.GoalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.spyglass.Model.Goal;


import java.util.List;

@Service
public class GoalService {

    private final GoalRepository goalsRepo;
    private final UserService userService;

    @Autowired
    public GoalService(GoalRepository goalsRepo, UserService userService)
    {
        this.goalsRepo = goalsRepo;
        this.userService = userService;
    }

    public void creatGoal(String username, Goal newGoal) throws GoalAlreadyExistsExeption
    {
        if (newGoal.getGoalId() != null)
        {
            if (goalsRepo.existsById(newGoal.getGoalId()))
            {
                    throw new GoalAlreadyExistsExeption(newGoal.getGoalId());
            }
        }

            User user = userService.getUser(username);
            if(user != null)
            {
               user.getGoals().add(newGoal);
               newGoal.setUser(user);

               userService.save(user);
               goalsRepo.save(newGoal);
            }

    }

    public List<Goal> getAllGoals(){
        return goalsRepo.findAll();
    }

    public List<Goal> getAllGoals(String username)
    {
        User user = userService.getUser(username);
        if(user != null)
        {
            return goalsRepo.findAllByUser(user);
        }
        return null;
    }

    public Goal findGoal(Long id) throws GoalNotFoundException{
        if(goalsRepo.existsById(id)){
            return goalsRepo.findById(id).orElseThrow(()
                         -> new GoalNotFoundException(id));
        }
        throw new GoalNotFoundException(id);
    }

    public Boolean deleteGoal(Long id) throws GoalNotFoundException{
        if (goalsRepo.existsById(id)){
            goalsRepo.deleteById(id);
            return true;
        }
        throw new GoalNotFoundException(id);
    }

    public Boolean clearGoals(){
        goalsRepo.deleteAll();
        return true;
    }
    public Boolean updateGoal(Long id, Goal updatedGoal) throws GoalNotFoundException{
        Goal oldGoal = goalsRepo.findById(id).orElse(null);
        if (oldGoal != null){
        if (goalsRepo.existsById(id)){
             oldGoal.setGoalName(updatedGoal.getGoalName());
             oldGoal.setReason(updatedGoal.getReason());
             oldGoal.setTargetAmount(updatedGoal.getTargetAmount());
             oldGoal.setTargetDate(updatedGoal.getTargetDate());

             goalsRepo.save(oldGoal);
             return true;
        }}
        return false;
    }
}
