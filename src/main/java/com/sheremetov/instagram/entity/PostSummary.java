package com.sheremetov.instagram.entity;


import com.sheremetov.instagram.util.IntegerUtils;

public class PostSummary {

    private int id;
    private Picture picture;
    private int likes;
    private int posts;

    public PostSummary() {}

    public PostSummary(Picture url) {
        this.picture = url;
    }

    public int getId() {
        return IntegerUtils.randomInt(99999);
    }

    public Picture getPicture() {
        return picture;
    }

    public int getLikes() {
        return IntegerUtils.randomInt(99999);
    }

    public int getPosts() {
        return IntegerUtils.randomInt(99999);
    }
}