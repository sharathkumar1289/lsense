package com.gl.exercise.model;
import java.util.concurrent.atomic.AtomicInteger;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

public class Movie {

    private static final AtomicInteger counter = new AtomicInteger(1);

    @Getter @Setter
    String movId;
    @Getter @Setter
    String movName;
    @Getter @Setter
    LocalDate movReleaseDate;

    @Getter @Setter
    Integer movRating;


    public Movie(String movName, LocalDate movReleaseDate, Integer movRating){
        this.movId=("M"+String.format("%03d", counter.getAndIncrement()));
        this.movName = movName;
        this.movRating = movRating;
        this.movReleaseDate = movReleaseDate;

    }

    public Movie() {

    }

    public String toString(){
        return "Movie { " + " Movie Name: "+ movName +" Movie ID: "+movId+" Movie Release Date: "+movReleaseDate+" Movie Rating: "+movRating+"}";
    }

    public String getmovName() {
        return this.movName=movName;
    }

    public Integer getmovRating() {
       return this.movRating = movRating;
    }
}

