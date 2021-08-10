package com.example.spyglass.Loading;

import com.example.spyglass.Model.User;
import com.example.spyglass.Repositories.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.List;

@Configuration
public class LoadingUsers {
    private static final Logger log = LoggerFactory.getLogger(LoadingUsers.class);
    List<User> UserList = new ArrayList<>();

    @Bean
    CommandLineRunner initUserDB(UserRepository repository) {
        return args -> {
            log.info("Preloading " + repository.save(new User("Anta", "Anta@gmail.com",null,25)));
            log.info("Preloading " + repository.save(new User("Juan", "Juan@gmail.com",null,20)));
        };
    }


}
