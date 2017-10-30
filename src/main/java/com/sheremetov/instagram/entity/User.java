package com.sheremetov.instagram.entity;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Created by denis on 10/27/2017.
 */
public class User {

    @JsonProperty("full_name")
    private String fullName;

    @JsonProperty("username")
    private String userName;

    private String avatar;

    public User() {}

    public User(String fullName, String userName, String avatar) {
        this.fullName = fullName;
        this.userName = userName;
        this.avatar = avatar;
    }

    public int getId() {
        return (int) Math.ceil(Math.random() * 99999);
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

}
