package com.gl.exercise.repository;

import com.gl.exercise.model.Movie;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class MovieRepositoryImpl implements MovieRepository{
    private final List<Movie> movieList;




    public MovieRepositoryImpl(){

        this.movieList = new ArrayList<>();

        this.movieList.add(new Movie("The Shawshank Redemption", LocalDate.of(1994, 9, 23), 9));
        this.movieList.add(new Movie("The Godfather", LocalDate.of(1972, 3, 24), 9));
        this.movieList.add(new Movie("The Dark Knight", LocalDate.of(2008, 7, 18), 9));
        this.movieList.add(new Movie("Inception", LocalDate.of(2010, 7, 16), 8));
        this.movieList.add(new Movie("Forrest Gump", LocalDate.of(1994, 6, 23), 9));




    }
    @Override
    public boolean addMovie(Movie movie) {
        return this.movieList.add(movie);
    }

    @Override
    public Optional<Movie> fetchMovieByName(String name) {

            return this.movieList.stream()
                    .filter(movie -> movie.getmovName().equalsIgnoreCase(name))
                    .findFirst();
        }

    @Override
    public Optional<ArrayList<Movie>> fetchMoviesByRating(Integer rating) {
        List<Movie> movies = movieList.stream().filter(movie -> movie.getmovRating().equals(rating)).toList();
        return Optional.of(new ArrayList<>(movies));
    }

    @Override
    public String updateMovieRatingByName(String name) {
        return "";
    }

    @Override
    public List<Movie> deleteMovieById(String id) {
        return List.of();
    }


}


