package com.sheremetov.instagram.service;

import com.sheremetov.instagram.entity.Profile;
import com.sheremetov.instagram.entity.User;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
public class StorageTest {

    @Autowired
    private StorageService storageService;

    @Test
    public void testGetPeople() {
        Assert.assertNotNull(storageService);
        List<User> users = storageService.getFollowing(3);
        Assert.assertEquals(3, users.size());
        Assert.assertNotNull(users.get(0).getAvatar());
        Assert.assertNotNull(users.get(0).getFullName());
        Assert.assertNotNull(users.get(0).getUserName());
        Assert.assertNotEquals(0, users.get(0).getId());
    }

    @Test
    public void testProfile() {
        Assert.assertNotNull(storageService);
        Profile profile = storageService.getProfile();
        Assert.assertNotNull(profile.getGallery().get(0).getPicture());
    }


}