package com.sheremetov.instagram.web;

import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(value = "/user/")
public class User {

    @RequestMapping(value="/login", method = RequestMethod.POST)
    public String login(@RequestParam String user, @RequestParam String password) {
        return System.getenv("INSTAGRAM_USER");
//        return System.getenv("DATABASE_URL");
    }

}
