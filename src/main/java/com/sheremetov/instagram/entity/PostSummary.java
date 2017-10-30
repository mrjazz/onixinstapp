package com.sheremetov.instagram.entity;


import com.sheremetov.instagram.util.IntegerUtils;

public class PostSummary {

    private int id;
    private String url;
    private int likes;
    private int posts;

    public PostSummary() {}

    public PostSummary(String url) {
        this.url = url;
    }

    public int getId() {
        return IntegerUtils.randomInt(99999);
    }

    public String getUrl() {
        return url;
    }

    public int getLikes() {
        return IntegerUtils.randomInt(99999);
    }

    public int getPosts() {
        return IntegerUtils.randomInt(99999);
    }
}