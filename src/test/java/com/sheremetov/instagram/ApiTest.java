package com.sheremetov.instagram;

import org.brunocvcunha.instagram4j.Instagram4j;
import org.brunocvcunha.instagram4j.requests.InstagramSearchUsernameRequest;
import org.brunocvcunha.instagram4j.requests.payload.InstagramSearchUsernameResult;
import org.junit.Test;

import java.io.IOException;


public class ApiTest {

    @Test
    public void testApi() throws IOException {
        Instagram4j instagram = Instagram4j.builder().username("").password("").build();
        instagram.setup();
        instagram.login();

        InstagramSearchUsernameResult userResult = instagram.sendRequest(new InstagramSearchUsernameRequest("github"));
        System.out.println("ID for @github is " + userResult.getUser().getPk());
        System.out.println("Number of followers: " + userResult.getUser().getFollower_count());
    }

}
