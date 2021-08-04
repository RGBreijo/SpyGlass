package com.example.spyglass.Repositories;


import com.example.spyglass.Model.Goal;
import com.example.spyglass.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GoalRepository extends JpaRepository <Goal,Long> {
    List<Goal> findAllByUser(User user);
}
