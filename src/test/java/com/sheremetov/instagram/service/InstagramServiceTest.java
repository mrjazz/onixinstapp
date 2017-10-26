package com.sheremetov.instagram.service;

import org.junit.Assert;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;


@RunWith(SpringRunner.class)
@SpringBootTest
public class InstagramServiceTest {

    @Autowired
    private UserService userService;


    @Test
    public void loginTest() {
        final String user = System.getenv("INSTAGRAM_USER");
        final String pass = System.getenv("INSTAGRAM_PASS");

        Assert.assertNotNull(user);
        Assert.assertNotNull(pass);
        Assert.assertNotNull(userService);

        String token1 = userService.login(user, pass);
        Assert.assertNotNull(token1);

        String token2 = userService.login("qweqwe", "qweqwe");
        Assert.assertNull(token2);
    }

}
