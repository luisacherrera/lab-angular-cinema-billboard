import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {
  id: Number;
  movie: any;

  constructor(private moviesService : MoviesService, private activatedRoute: ActivatedRoute) { 

  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params => {
        this.id =params.id
        this.movie = this.moviesService.getMovie(Number(this.id));
      });
  }

}
