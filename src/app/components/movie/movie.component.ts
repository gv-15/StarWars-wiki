import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  
  movie: any;
  
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      const id = paramMap.get('episode_id');
      if (id) {
        this.movieService.getFilm(parseInt(id)).subscribe( movie => {
          this.movie = movie;
        });
      }
    });
  }
}
