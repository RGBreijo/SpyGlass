package com.example.spyglass;


import com.example.spyglass.Model.User;
import com.example.spyglass.Repositories.UserRepository;
import com.example.spyglass.Services.UserService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.Optional;

import static org.mockito.Mockito.doReturn;

@SpringBootTest
public class UserServiceTest {

    @Autowired
    private UserService userService;

    @MockBean
    private UserRepository userRepository;

    @Test
    @DisplayName("Test to find user by id - successful")
    void TestFindById() {
        User user = new User("Anta", "anta@gmail.com");
        userService.save(user);
        doReturn(Optional.of(user)).when(userRepository).findById(1L);

        Optional<User> returnUser = Optional.ofNullable(userService.getUser(1L));

        Assertions.assertTrue(returnUser.isPresent(), "User was not found");


    }
}