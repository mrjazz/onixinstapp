package com.sheremetov.instagram.web;

import com.sheremetov.instagram.request.LoginRequest;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(value = "/user/")
public class User {

    @RequestMapping(value="/login", method = RequestMethod.POST)
    public String login(@RequestBody final LoginRequest data) {
        return data.getUser();
    }

}
