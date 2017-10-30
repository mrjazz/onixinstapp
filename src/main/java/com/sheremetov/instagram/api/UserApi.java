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


    @RequestMapping(value="/following")
    public List<User> following() throws Exception {
        return storageService.getFollowing(IntegerUtils.randomInt(5) + 1);
    }

    @RequestMapping(value="/gallery")
    public List<PostSummary> gallery() throws Exception {
        return storageService.getGallery();
    }

    @RequestMapping("/{userId}")
    public Profile profile(@PathVariable int userId) throws Exception {
        return storageService.getProfile();
    }

}