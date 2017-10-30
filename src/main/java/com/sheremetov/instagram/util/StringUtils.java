package com.sheremetov.instagram.util;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sheremetov.instagram.entity.User;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

/**
 * Created by denis on 10/27/2017.
 */
public class StringUtils {

    public static String readStringFromStream(InputStream stream) {
        try {
            String newLine = System.getProperty("line.separator");
            BufferedReader reader = new BufferedReader(new InputStreamReader(stream));
            StringBuilder json = new StringBuilder();
            String line; boolean flag = false;
            while ((line = reader.readLine()) != null) {
                json.append(flag ? newLine : "").append(line);
                flag = true;
            }
            return json.toString();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

    public static Object stringToJson(String json, Class clazz) {
        try {
            ObjectMapper mapper = new ObjectMapper();
            return mapper.readValue(json, clazz);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

}
