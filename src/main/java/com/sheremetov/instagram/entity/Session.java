package com.sheremetov.instagram.entity;

import org.brunocvcunha.instagram4j.Instagram4j;


public class Session {

    private Instagram4j instagram;
    private String user;

    public Session(Instagram4j instagram, String user) {
        this.instagram = instagram;
        this.user = user;
    }

    public Instagram4j getInstagram() {
        return instagram;
    }

    public String getUser() {
        return user;
    }
}
