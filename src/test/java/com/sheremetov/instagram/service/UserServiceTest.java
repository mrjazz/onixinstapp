package com.sheremetov.instagram.service;

import com.sheremetov.instagram.entity.Session;
import org.brunocvcunha.instagram4j.Instagram4j;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.test.context.junit4.SpringRunner;

import static org.mockito.Mockito.when;


@RunWith(SpringRunner.class)
public class UserServiceTest {

    @Mock
    private InstagramService instagramService;

    @InjectMocks
    private UserService userService;

    @Test
    public void testLogin() {
        when(instagramService.login("test", "passed")).thenReturn(new Instagram4j("test", "passed"));
        String token = userService.login("test", "passed");
        Assert.assertNotNull(token);

        Session session = userService.getSessionByToken(token);
        Assert.assertNotNull(session);
    }



}
