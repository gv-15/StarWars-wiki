import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  endpoint = 'films/';

  constructor(public http: HttpClient) {
  }

  getFilm(id: number): Observable<any> {
    //Api Rest petition
    return this.http.get(environment.URL_SWAPI + this.endpoint + id)
  }
}
