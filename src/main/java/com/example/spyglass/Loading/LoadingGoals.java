package com.example.spyglass.Loading;

import com.example.spyglass.Model.Goal;
import com.example.spyglass.Model.User;
import com.example.spyglass.Repositories.GoalRepository;
import com.example.spyglass.Repositories.UserRepository;
import com.example.spyglass.Services.GoalService;
import com.example.spyglass.Services.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import java.util.Date;

@Order(value = 2)
@Configuration
public class LoadingGoals {
    private static final Logger log = LoggerFactory.getLogger(LoadingGoals.class);
    List<Goal> goalList = new ArrayList<>();


    public final GoalService goalService;

    public final UserService userService;

    SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd");

    @Autowired
    public LoadingGoals(UserService userService, GoalService goalService) throws ParseException {
        this.goalService = goalService;
        this.userService = userService;
    }
    Date date1 = sdf.parse("2021/10/06");
    Date date2 = sdf.parse("2052/6/06");
    Date date3 = sdf.parse("2022/1/20");
    Goal goal1 = new Goal("Car", "I will get a more fuel efficient car that will allow me to go on more trips and has a cheaper repair cost.",date1, 7000,3000,500,1L);
    Goal goal2 = new Goal("Home", "After these 5 past years of exploring the world I think I'm finally ready to settle down." +
            "I'm going to need a house if I'm going down this route.",date2, 270000,40000,1250, 2L);
    Goal goal3 = new Goal("College", "I am going to college so I can increase my chances of getting a job "
            ,date3,8000,2000,500,3L);



    @Bean
    CommandLineRunner initGoalDB(UserRepository repository, GoalRepository goalRepository) {
        User user = new User("Anta", "Anta@gmail.com");
        goalList.add(goal1);
        goalList.add(goal2);
        goalList.add(goal3);



        return args -> {
            repository.save(user);

            User userSaving1 = repository.findByUsername(user.getUsername());
            log.info("should be anta " + userSaving1);
            userSaving1.setGoals(goalList);
            goal1.setUser(userSaving1);
            goal2.setUser(userSaving1);
            goal3.setUser(userSaving1);

            goalRepository.save(goal1);
            goalRepository.save(goal2);
            goalRepository.save(goal3);





        };



    }





}
