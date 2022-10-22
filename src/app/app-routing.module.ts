import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MovieComponent} from "./components/movie/movie.component";
import {MoviesComponent} from "./components/movies/movies.component";
import {CharacterComponent} from "./components/character/character.component";
import {CharactersComponent} from "./components/characters/characters.component";

const routes: Routes = [
  {
    path: '',
    component: MoviesComponent,
  },
  {
    path: 'movie/:episode_id',
    component: MovieComponent,
  },
  {
    path: 'character/:name',
    component: CharacterComponent,
  },
  {
    path: 'character',
    component: CharactersComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
