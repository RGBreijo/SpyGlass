package com.example.spyglass.Services;

import com.example.spyglass.Exceptions.GoalAlreadyExistsExeption;
import com.example.spyglass.Exceptions.GoalNotFoundException;
import com.example.spyglass.Model.Goals;
import com.example.spyglass.Repositories.GoalsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GoalService {

    @Autowired
    GoalsRepository goalsRepo;

    public GoalService(){

    }

    public Goals creatGoal(Goals newGoal) throws GoalAlreadyExistsExeption {
        if (newGoal.getGoalId() != null){
        if (goalsRepo.existsById(newGoal.getGoalId())){
            throw new GoalAlreadyExistsExeption(newGoal.getGoalId());
        }}
        return goalsRepo.save(newGoal);
    }

    public List<Goals> getAllGoals(){
        return goalsRepo.findAll();
    }

    public Goals findGoal(Long id) throws GoalNotFoundException{
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
    public Boolean updateGoal(Long id, Goals updatedGoal) throws GoalNotFoundException{
        Goals oldGoal = goalsRepo.findById(id).orElse(null);
        if (oldGoal != null){
        if (goalsRepo.existsById(id)){
             oldGoal.setGoalName(updatedGoal.getGoalName());
             oldGoal.setReason(updatedGoal.getReason());
             oldGoal.setCurrentGoal(updatedGoal.getCurrentGoal());
             oldGoal.setPriority(updatedGoal.getPriority());
             oldGoal.setTarget$Amount(updatedGoal.getTarget$Amount());
             oldGoal.setInitDeposit(updatedGoal.getCurrentGoal());
             oldGoal.setTargetDate(updatedGoal.getTargetDate());
             goalsRepo.save(oldGoal);
             return true;
        }}
        return false;
    }
}
