package com.sheremetov.instagram.util;

/**
 * Created by denis on 10/30/2017.
 */
public class DoubleUtils {

    public static double randomInt(int max) {
        return Math.random() * max;
    }

    public static double randomInt(int min, int max) {
        return min + Math.random() * (max - min);
    }

}
