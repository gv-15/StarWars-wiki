import { Component, OnInit } from '@angular/core';
import {FilmsService} from "../../services/movies.service";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: [] = [];
  movieCount!: number;

  constructor(
    private moviesService: FilmsService
  ) { }

  ngOnInit(): void {
   this.moviesService.getFilms().subscribe(movies => {
      this.movies = movies.results;
      this.movieCount = movies.count;
    })
  }

}
