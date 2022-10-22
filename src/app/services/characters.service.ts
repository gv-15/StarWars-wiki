import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  endpoint = 'people?page=';

  constructor(public http: HttpClient) {
  }

  getCharacters(pageNumber: number): Observable<any> {
    //Api Rest petition
    return this.http.get(environment.URL_SWAPI + this.endpoint + pageNumber)
  }
}
