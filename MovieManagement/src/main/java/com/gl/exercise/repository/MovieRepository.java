package com.gl.exercise.repository;

import com.gl.exercise.model.Movie;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public interface MovieRepository {
    boolean addMovie(Movie movie);
    Optional<Movie> fetchMovieByName(String name);
    Optional<ArrayList<Movie>> fetchMoviesByRating(Integer rating);

    String updateMovieRatingByName(String name);
    List<Movie> deleteMovieById(String id);
}

