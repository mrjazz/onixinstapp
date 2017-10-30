package com.sheremetov.instagram.util;

/**
 * Created by denis on 10/30/2017.
 */
public class IntegerUtils {

    public static int randomInt(int max) {
        return (int) Math.floor(Math.random() * max);
    }

    public static int randomInt(int min, int max) {
        return min + (int) Math.floor(Math.random() * (max - min));
    }

}
