package com.sheremetov.instagram.entity;

import java.util.List;
import java.util.Optional;

/**
 * Created by denis on 10/27/2017.
 */
public class PictureSet {

    private List<Picture> pictures;
    private String caption;

    public PictureSet() {}

    public PictureSet(List<Picture> pictures, String caption) {
        this.pictures = pictures;
        this.caption = caption;
    }

    public Optional<Picture> getPictureWithHeight(int height) {
        for(Picture picture : pictures) {
            if (height == picture.getHeight()) {
                return Optional.of(picture);
            }
        }
        return Optional.empty();
    }

    public List<Picture> getPictures() {
        return pictures;
    }

    public void setPictures(List<Picture> pictures) {
        this.pictures = pictures;
    }

    public String getCaption() {
        return caption;
    }

    public void setCaption(String caption) {
        this.caption = caption;
    }
}
