package com.example.spyglass.Repositories;

import com.example.spyglass.Model.Goals;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GoalsRepository extends JpaRepository <Goals,Long> {

}
