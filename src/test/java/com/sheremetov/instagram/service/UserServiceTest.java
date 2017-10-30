package com.sheremetov.instagram.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sheremetov.instagram.entity.Session;
import com.sheremetov.instagram.entity.User;
import com.sheremetov.instagram.util.StringUtils;
import org.brunocvcunha.instagram4j.Instagram4j;
import org.junit.Assert;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.test.context.junit4.SpringRunner;

import java.io.*;
import java.util.LinkedList;

import static org.mockito.Mockito.when;


@RunWith(SpringRunner.class)
public class UserServiceTest {

    @Mock
    private InstagramService instagramService;

    @InjectMocks
    private UserService userService;

    @Autowired
    private ResourceLoader resourceLoader;

    @Ignore
    @Test
    public void testLogin() {
        when(instagramService.login("test", "passed")).thenReturn(new Instagram4j("test", "passed"));
        String token = userService.login("test", "passed");
        Assert.assertNotNull(token);

        Session session = userService.getSessionByToken(token);
        Assert.assertNotNull(session);
    }

    @Test
    public void testResourceLoad() throws IOException {
        Assert.assertNotNull(resourceLoader);
        Resource resource = resourceLoader.getResource("file:users.json");

        String json = StringUtils.readStringFromStream(resource.getInputStream());
        User[] users = (User[])StringUtils.stringToJson(json, User[].class);

        Assert.assertNotNull(users);
        Assert.assertEquals(228, users.length);
    }

}
