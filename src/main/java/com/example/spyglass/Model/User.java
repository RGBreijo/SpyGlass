package com.example.spyglass.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;

//Giving the user attributes it would need
@Entity
public class User {

    @Id
    @GeneratedValue
    private Long id;
    private String username;
    private String email;
    private String password;
    private int points;

    @OneToMany(mappedBy = "user")
    private List<Goal> goals;

    public User() {
    }

    public User(String Username, Long id, String email, String password,int points) {
        this.username = Username;
        this.id = id;
        this.email = email;
        this.password = password;
        this.points = points;
    }

    public User(String username, String email)
    {
        this.username = username;
        this.email = email;
    }


    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + username + '\'' +
                ", email=" +  email+
                ", password=" + password +
                ", points=" + points +
                '}';
    }
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getPoints() {
        return points;
    }

    public void setPoints(int points) {
        this.points = points;
    }

    public List<Goal> getGoals()
    {
        return goals;
    }

    public void setGoals(List<Goal> goals)
    {
        this.goals = goals;
    }
}