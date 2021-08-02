package com.example.spyglass.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.spyglass.Model.User;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
}
