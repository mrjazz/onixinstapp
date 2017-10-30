package com.sheremetov.instagram.entity;


import com.sheremetov.instagram.util.IntegerUtils;

public class ProfileStatistic {

    private int posts;
    private int followers;
    private int following;

    public ProfileStatistic() {
        this.posts = IntegerUtils.randomInt(99999);
        this.followers = IntegerUtils.randomInt(99999);
        this.following = IntegerUtils.randomInt(99999);
    }

    public ProfileStatistic(int posts, int followers, int following) {
        this.posts = posts;
        this.followers = followers;
        this.following = following;
    }

    public int getPosts() {
        return posts;
    }

    public void setPosts(int posts) {
        this.posts = posts;
    }

    public int getFollowers() {
        return followers;
    }

    public void setFollowers(int followers) {
        this.followers = followers;
    }

    public int getFollowing() {
        return following;
    }

    public void setFollowing(int following) {
        this.following = following;
    }
}
