package com.example.spyglass.Services;

import com.example.spyglass.Model.User;
import com.example.spyglass.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

//Service talks to our Repo and tells it what to do
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


    public void save(User user)
    {
        userRepository.save(user);
    }
    public User getUser(Long id)
    {
        return userRepository.findById(id).orElse(null);
    }

    public User getUser(String username)
    {
        return userRepository.findByUsername(username);
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


