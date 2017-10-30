package com.sheremetov.instagram.service;

import com.sheremetov.instagram.entity.Session;
import org.brunocvcunha.instagram4j.Instagram4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.concurrent.ConcurrentHashMap;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.impl.crypto.MacProvider;

import javax.servlet.ServletRequest;
import java.security.Key;

/**
 * Created by denis on 10/26/2017.
 */
@Service
public class UserService {

    @Autowired
    private InstagramService instagramService;

    private ConcurrentHashMap<String, Session> sessions = new ConcurrentHashMap<>();
    private Key key = MacProvider.generateKey();

    private String createToken(String user) {
        return Jwts.builder()
                .setSubject(user)
                .signWith(SignatureAlgorithm.HS512, key)
                .compact();
    }

    public Session getSessionByToken(String token) {
        Session session = sessions.get(token);
        if (session != null) {
            String user = Jwts.parser().setSigningKey(key).parseClaimsJws(token).getBody().getSubject();
            if (session.getUser().equals(user)) {
                return session;
            }
        }
        return null;
    }

    public String login(String user, String password) {
        Instagram4j instagram = instagramService.login(user, password);
        if (instagram != null) {
            Session session = new Session(instagram, user);
            String token = createToken(user);
            sessions.put(token, session);
            return token;
        }
        return null;
    }


}