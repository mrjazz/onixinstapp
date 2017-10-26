package com.sheremetov.instagram.service;

import org.brunocvcunha.instagram4j.Instagram4j;
import org.springframework.stereotype.Service;

import java.io.IOException;

/**
 * Created by denis on 10/26/2017.
 */
@Service
public class InstagramService {

    public Instagram4j login(String user, String password) {
        Instagram4j instagram = Instagram4j.builder().username(user).password(password).build();
        instagram.setup();
        try {
            instagram.login();
        } catch (IOException e) {
            return null;
        }
        if (instagram.isLoggedIn()){
            return instagram;
        } else {
            return null;
        }
    }

}
