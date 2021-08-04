package com.example.spyglass.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


@Entity
public class User {

    @Id
    @GeneratedValue
    private Long id;
    String Username;
    String email;
    private String password;
    int points;

    //@OneToMany(mappedBy = "user")
    //private List<Goals> goals;

    public User() {
    }

    public User(String Username, Long id, String email, String password,int points) {
        this.Username = Username;
        this.id = id;
        this.email = email;
        this.password = password;
        this.points = points;
    }
    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + Username + '\'' +
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
        return Username;
    }

    public void setUsername(String username) {
        Username = username;
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
}
