import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {
  movies: Array<Object>;

  constructor(private moviesService : MoviesService, private router: Router) { 
    this.movies = this.moviesService.getMovies();
  }

  ngOnInit() {
  }

  goToMovie(id) {
    this.router.navigate(['/movie', id])
  }

}
