package com.sheremetov.instagram.api;

import com.sheremetov.instagram.entity.Post;
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
@RequestMapping(value = "/api/post")
public class PostApi {

    @Autowired
    private StorageService storageService;


    @RequestMapping(value="/", produces = "application/json")
    public List<Post> posts() throws Exception {
        return storageService.getPosts(1 + IntegerUtils.randomInt(9));
    }

    @RequestMapping(value="/{userId}", produces = "application/json")
    public Post post(@PathVariable int userId) throws Exception {
        return storageService.getPost();
    }

}