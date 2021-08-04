package com.example.spyglass.Services;

import com.example.spyglass.Model.User;
import com.example.spyglass.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService
{
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository)
    {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers()
    {
        return userRepository.findAll();
    }

    public User getUser(Long id)
    {
        return userRepository.findById(id).orElse(null);
    }

    public User createUser(User user)
    {
        return userRepository.save(user);
    }

    public void deleteUser (Long id)
    {
        userRepository.deleteById(id);
    }
}


