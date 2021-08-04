package com.example.spyglass.Controllers;

import com.example.spyglass.Model.User;
import com.example.spyglass.Services.UserService;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    public UserController(UserService userService) {

        this.userService = userService;
    }

    public UserController() {

    }

    @GetMapping(value = "/")
    @CrossOrigin
    public List<User> getAllUsers() {

        return userService.getAllUsers();
    }

    @CrossOrigin
    @PostMapping("/")
    public void addAUser(@RequestBody User user) {

        userService.createUser(user);
    }

    @CrossOrigin
    @DeleteMapping("/removeAll")
    public void delete(@RequestBody User user) {

        userService.deleteAllUsers();
    }

//    @CrossOrigin
//    @PutMapping("/updateBudget")
//    public void setBudget(@RequestBody ObjectNode objectNode) {
//        Long userID = objectNode.get("id").asLong();
//        double budget = objectNode.get("budget").asDouble();
//        userService.setBudget(userID, budget);
//    }
//
//    @CrossOrigin
//    @PutMapping("/TotalSavings")
//    public void setSavingsGoal(@RequestBody ObjectNode objectNode) {
//        Long userID = objectNode.get("id").asLong();
//        double savingsGoal = objectNode.get("savingsGoal").asDouble();
//        userService.setSavingsGoal(userID, savingsGoal);
//    }
//
//    @CrossOrigin
//    @GetMapping("/getGoal")
//    public double getSavingsGoal(@RequestBody ObjectNode objectNode) {
//        Long userID = objectNode.get("id").asLong();
//        return userService.getSavingsGoal(userID);
    }

