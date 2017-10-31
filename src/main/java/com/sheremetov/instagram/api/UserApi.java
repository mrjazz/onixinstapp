package com.sheremetov.instagram.api;

import com.sheremetov.instagram.entity.PostSummary;
import com.sheremetov.instagram.entity.Profile;
import com.sheremetov.instagram.entity.User;
import com.sheremetov.instagram.service.StorageService;
import com.sheremetov.instagram.util.IntegerUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping(value = "/api/user")
public class UserApi {

    @Autowired
    private StorageService storageService;


    @RequestMapping(value="/following", produces = "application/json")
    public List<User> following() throws Exception {
        return storageService.getFollowing(3);
    }

    @RequestMapping(value="/gallery", produces = "application/json")
    public List<PostSummary> gallery() throws Exception {
        return storageService.getGallery();
    }

    @RequestMapping(value="/{userId}", produces = "application/json")
    public Profile profile(@PathVariable int userId) throws Exception {
        return storageService.getProfile();
    }

}