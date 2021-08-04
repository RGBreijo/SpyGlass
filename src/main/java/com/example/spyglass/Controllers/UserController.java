package com.example.spyglass.Controllers;

import com.example.spyglass.Model.User;
import com.example.spyglass.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {

        this.userService = userService;
    }

    @GetMapping("/all")
    public List<User> getAllUsers() {

        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public User getUser(@PathVariable Long id)
    {
       return  userService.getUser(id);
    }

    @PostMapping
    public void addAUser(@RequestBody User user) {

        userService.createUser(user);
    }

    @DeleteMapping("/{id}")
    public void deleteAUser(@PathVariable Long id) {

        userService.deleteUser(id);
    }

}

