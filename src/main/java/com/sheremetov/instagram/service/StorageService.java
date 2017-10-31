package com.sheremetov.instagram.service;

import com.sheremetov.instagram.entity.*;
import com.sheremetov.instagram.util.DoubleUtils;
import com.sheremetov.instagram.util.IntegerUtils;
import com.sheremetov.instagram.util.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.util.LinkedList;
import java.util.List;


@Service
public class StorageService {

    private static final String DEFAULT_PIC = "https://scontent-waw1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/22277665_140971593309587_94460048964583424_n.jpg?ig_cache_key=MTYyMDkwOTQ5MjU3NjA4MTAxMA%3D%3D.2";
    private static final int DEFAULT_PIC_HEIGHT = 640;
    private static final int DEFAILT_TIMESTAMP = 1508457600;

    @Autowired
    private ResourceLoader resourceLoader;

    private User[] users;
    private String[] comments;
    private PictureSet[] pictureSets;

    @PostConstruct
    public final void init() {
        Resource resource;
        String json;
        try {
            resource = resourceLoader.getResource("file:json/users.json");
            json = StringUtils.readStringFromStream(resource.getInputStream());
            users = (User[]) StringUtils.stringToJson(json, User[].class);
        } catch (IOException e) {
            e.printStackTrace();
        }

        try {
            resource = resourceLoader.getResource("file:json/comments.json");
            json = StringUtils.readStringFromStream(resource.getInputStream());
            comments = (String[]) StringUtils.stringToJson(json, String[].class);
        } catch (IOException e) {
            e.printStackTrace();
        }

        try {
            resource = resourceLoader.getResource("file:json/pictures.json");
            json = StringUtils.readStringFromStream(resource.getInputStream());
            pictureSets = (PictureSet[]) StringUtils.stringToJson(json, PictureSet[].class);
        } catch (IOException e) {
            e.printStackTrace();
        }

    }

    public List<User> getFollowing(int limit) {
        LinkedList<User> result = new LinkedList<>();
        for (int i = 0; i < limit; i++) {
            result.add(getRandomUser());
        }
        return result;
    }

    private User getRandomUser() {
        return this.users[IntegerUtils.randomInt(this.users.length)];
    }

    private String getRandomComment() {
        return this.comments[IntegerUtils.randomInt(this.comments.length)];
    }

    private Picture getRandomPicture() {
        return this.pictureSets[IntegerUtils.randomInt(this.pictureSets.length)]
                .getPictureWithHeight(DEFAULT_PIC_HEIGHT)
                .orElse(new Picture(DEFAULT_PIC_HEIGHT, DEFAULT_PIC_HEIGHT, DEFAULT_PIC));
    }

    public Profile getProfile() {
        List<PostSummary> gallery = getGallery();

        Profile profile = new Profile();
        profile
                .setAvatar(getRandomUser().getAvatar())
                .setUserName(getRandomUser().getUserName())
                .setDescription(getRandomComment())
                .setVerified(Math.round(Math.random() * 100) > 10)
                .setGallery(gallery);

        return profile;
    }

    public List<PostSummary> getGallery() {
        LinkedList<PostSummary> gallery = new LinkedList<>();
        int gallerySize = 6 + IntegerUtils.randomInt(3) * 3;
        for (int i = 0; i < gallerySize; i++) {
            gallery.add(
                    new PostSummary(getRandomPicture())
            );
        }
        return gallery;
    }

    public List<Post> getPosts(int count) {
        LinkedList<Post> posts = new LinkedList<>();
        for (int i = 0; i < count; i++) {
            posts.add(getPost());
        }
        return posts;
    }

    public Post getPost() {
        int commentsCount = 1 + IntegerUtils.randomInt(9);
        LinkedList<Comment> comments = new LinkedList<>();
        for (int i = 0; i < commentsCount; i++) {
            comments.add(new Comment(
                    getRandomComment(),
                    getRandomUser(),
                    getRandomTimestamp()
            ));
        }

        Post post = new Post();
        post
                .setProfile(getProfile())
                .setPicture(getRandomPicture())
                .setComments(comments)
                .setTimestamp(getRandomTimestamp())
                .setLikesCount(IntegerUtils.randomInt(100))
                .setLocation(String.format("%s,%s",
                        DoubleUtils.randomInt(180) - DoubleUtils.randomInt(360),
                        DoubleUtils.randomInt(85) - DoubleUtils.randomInt(170)
                ));

        return post;
    }

    private int getRandomTimestamp() {
        return DEFAILT_TIMESTAMP - IntegerUtils.randomInt(9999);
    }

}