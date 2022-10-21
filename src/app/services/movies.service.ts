import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  endpoint = 'films/';

  constructor(public http: HttpClient) {
  }

  getFilms(): Observable<any> {
    //Api Rest petition
    return this.http.get(environment.URL_SWAPI + this.endpoint)
  }
}


