package com.example.spyglass;

import com.example.spyglass.Model.Goal;
import com.example.spyglass.Model.User;
import com.example.spyglass.Repositories.GoalRepository;
import com.example.spyglass.Services.GoalService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.DisplayNameGeneration;
import org.junit.jupiter.api.Test;
import org.mockito.stubbing.Stubber;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;


import java.util.Optional;

import static org.mockito.Mockito.doReturn;

@SpringBootTest
public class GoalServiceTest {

    @Autowired
    private GoalService goalService;

    @MockBean
    private GoalRepository goalRepository;

    @Test
    @DisplayName("Testing to find goal id - Was a success!")
    void testFindGoalById() {
        Goal goal = new Goal("Buy a house", "Multiple rooms");
        goalRepository.save(goal);
        doReturn(Optional.of(goal)).when(goalRepository).findById(1L);

        System.out.print(goal);

        Optional<Goal> returnGoal = Optional.ofNullable(goalRepository.findById(1L).orElse(null));

        Assertions.assertTrue(returnGoal.isPresent(), "Goal was not located.");
        Assertions.assertSame(returnGoal.get(), goal, "The goal returned was not the same as the test.");
    }
}
