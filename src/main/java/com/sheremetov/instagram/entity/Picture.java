package com.sheremetov.instagram.entity;

/**
 * Created by denis on 10/27/2017.
 */
public class Picture {

    private int height;
    private int width;
    private String url;

    public Picture() {}

    public Picture(int width, int height, String url) {
        this.height = height;
        this.width = width;
        this.url = url;
    }

    public int getHeight() {
        return height;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public int getWidth() {
        return width;
    }

    public void setWidth(int width) {
        this.width = width;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

}
