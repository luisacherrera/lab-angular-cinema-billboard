import { Injectable } from '@angular/core';
import { MoviesSample } from "../../sample-movies";

export interface Movies {
  id: Number,
  title: String,
  poster: String,
  synopsis: String,
  genres: Array <String>,
  year: Number,
  director: String,
  actors: Array <String>,
  hours: Array <String>,
  room: Number
}

@Injectable()
export class MoviesService {
  movies: Array<Movies> = MoviesSample;

  constructor() { }

  getMovies() {
    return this.movies;
  }

  getMovie(id: Number) {
    for (let i = 0; i < this.movies.length; i++) {
      if (this.movies[i].id === id) {
        return this.movies[i];
      }
    }
  }

}
