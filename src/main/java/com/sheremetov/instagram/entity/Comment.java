package com.sheremetov.instagram.entity;

/**
 * Created by denis on 10/27/2017.
 */
public class Comment {

    private String text;
    private User user;
    private int timestamp;

    public Comment() {}

    public Comment(String text, User user, int timestamp) {
        this.text = text;
        this.user = user;
        this.timestamp = timestamp;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public int getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(int timestamp) {
        this.timestamp = timestamp;
    }
}
