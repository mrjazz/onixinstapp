package com.sheremetov.instagram.entity;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;


public class Profile {

    @JsonProperty("username")
    private String userName;
    private String description;
    private String avatar;
    private boolean verified = true;
    private ProfileStatistic count = new ProfileStatistic();
    private List<PostSummary> gallery;


    public String getUserName() {
        return userName;
    }

    public Profile setUserName(String userName) {
        this.userName = userName;
        return this;
    }

    public String getDescription() {
        return description;
    }

    public Profile setDescription(String description) {
        this.description = description;
        return this;
    }

    public String getAvatar() {
        return avatar;
    }

    public Profile setAvatar(String avatar) {
        this.avatar = avatar;
        return this;
    }

    public boolean isVerified() {
        return verified;
    }

    public Profile setVerified(boolean verified) {
        this.verified = verified;
        return this;
    }

    public ProfileStatistic getCount() {
        return count;
    }

    public void setCount(ProfileStatistic count) {
        this.count = count;
    }

    public List<PostSummary> getGallery() {
        return gallery;
    }

    public Profile setGallery(List<PostSummary> gallery) {
        this.gallery = gallery;
        return this;
    }
}
