package com.sheremetov.instagram.web;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping(value = "/user/")
public class User {

    @RequestMapping("/login")
    public String login() {
        return "ok";
    }

}
