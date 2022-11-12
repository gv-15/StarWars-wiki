import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  endpoint = 'people/';

  constructor(public http: HttpClient) {
  }

  getCharacter(id: number): Observable<any> {
    //Api Rest petition
    return this.http.get(environment.URL_SWAPI + this.endpoint + id);
  }
}
