package com.example.spyglass.Repositories;

import com.example.spyglass.Model.Goals;
import com.example.spyglass.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GoalsRepository extends JpaRepository <Goals,Long> {
    List<Goals> findAllByUser(User user);
}
