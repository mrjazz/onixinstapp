package com.sheremetov.instagram.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sheremetov.instagram.entity.*;
import org.brunocvcunha.instagram4j.Instagram4j;
import org.brunocvcunha.instagram4j.requests.InstagramAutoCompleteUserListRequest;
import org.brunocvcunha.instagram4j.requests.InstagramGetUserFollowingRequest;
import org.brunocvcunha.instagram4j.requests.InstagramSearchTagsRequest;
import org.brunocvcunha.instagram4j.requests.InstagramUserFeedRequest;
import org.brunocvcunha.instagram4j.requests.internal.InstagramFetchHeadersRequest;
import org.brunocvcunha.instagram4j.requests.payload.*;
import org.junit.Assert;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.io.File;
import java.io.IOException;
import java.util.*;


@RunWith(SpringRunner.class)
@SpringBootTest
public class InstagramServiceTest {

    @Autowired
    private UserService userService;

    @Ignore
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

    @Ignore
    @Test
    public void searchTest() {
        HashMap<String, User> users = new HashMap<>();
        LinkedList<String> comments = new LinkedList<>();
        LinkedList<PictureSet> pictures = new LinkedList<>();

        final String userAccount = System.getenv("INSTAGRAM_USER");
        final String passAccount = System.getenv("INSTAGRAM_PASS");

        String token = userService.login(userAccount, passAccount);
        Session session = userService.getSessionByToken(token);
        Instagram4j instagram4j = session.getInstagram();
        try {
            InstagramGetUserFollowersResult result = instagram4j.sendRequest(new InstagramGetUserFollowingRequest(instagram4j.getUserId()));
            for (InstagramUserSummary user : result.getUsers()) {
                InstagramFeedResult feed = instagram4j.sendRequest(new InstagramUserFeedRequest(user.getPk()));
                fillDataFromFeed(users, comments, pictures, feed);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        writeJson(pictures, "pictures.json");
        writeJson(users.values(), "users.json");
        writeJson(comments, "comments.json");
    }

    private void fillDataFromFeed(HashMap<String, User> users, LinkedList<String> comments, LinkedList<PictureSet> pictures, InstagramFeedResult feed) {
        for (InstagramFeedItem feedResult : feed.getItems()) {

            LinkedList<Picture> pictureSet = new LinkedList<>();
            if (feedResult.getImage_versions2().get("candidates") != null) {
                ArrayList<LinkedHashMap> medias = (ArrayList<LinkedHashMap>) feedResult.getImage_versions2().get("candidates");
                for (LinkedHashMap media : medias) {
                    pictureSet.add(new Picture(
                                    (Integer) media.get("width"),
                                    (Integer) media.get("height"),
                                    media.get("url").toString()
                            )
                    );
                }
            }

            String caption = "";
            if (feedResult.getCaption() != null && feedResult.getCaption().get("text") != null) {
                caption = feedResult.getCaption().get("text").toString();
            }
            pictures.add(new PictureSet(pictureSet, caption));

            users.put(
                    feedResult.getUser().getUsername(),
                    new User(
                        feedResult.getUser().getFull_name(),
                        feedResult.getUser().getUsername(),
                        feedResult.getUser().getProfile_pic_url()
                    )
            );

            if (feedResult.getComments() != null && feedResult.getComments().size() > 0) {
                ArrayList<LinkedHashMap> postComments = (ArrayList)feedResult.getComments();
                for (LinkedHashMap comment : postComments) {
                    comments.add(comment.get("text").toString());
                }
            }
        }
    }

    private void writeJson(Collection obj, String fileName) {
        ObjectMapper mapper = new ObjectMapper();
        try {
            mapper.writeValue(new File(fileName), obj);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}