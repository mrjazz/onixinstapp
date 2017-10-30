package com.sheremetov.instagram.entity;

import com.sheremetov.instagram.util.DoubleUtils;
import com.sheremetov.instagram.util.IntegerUtils;

import java.util.List;


public class Post {

    private Profile profile;
    private String location;
    private String picture;
    private int likesCount;
    private List<Comment> comments;
    private int timestamp;

    public Profile getProfile() {
        return profile;
    }

    public Post setProfile(Profile profile) {
        this.profile = profile;
        return this;
    }

    public String getLocation() {
        return location;
    }

    public Post setLocation(String location) {
        this.location = location;
        return this;
    }

    public String getPicture() {
        return picture;
    }

    public Post setPicture(String picture) {
        this.picture = picture;
        return this;
    }

    public int getLikesCount() {
        return likesCount;
    }

    public Post setLikesCount(int likesCount) {
        this.likesCount = likesCount;
        return this;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public Post setComments(List<Comment> comments) {
        this.comments = comments;
        return this;
    }

    public int getTimestamp() {
        return timestamp;
    }

    public Post setTimestamp(int timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}
