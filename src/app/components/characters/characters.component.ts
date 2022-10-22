import { Component, OnInit } from '@angular/core';
import { CharactersService } from "../../services/characters.service";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  charactersArray: any[] = [];
  characterCount!: number;

  constructor(
    private charactersService: CharactersService
  ) { }

  ngOnInit(): void {
    for (let pageNumbers = 1; pageNumbers <= 9; pageNumbers++) {
      this.charactersService.getCharacters(pageNumbers).subscribe(characters => {
        this.characterCount =+ characters.count;
        characters.results.map((character: any) => this.charactersArray.push(character));
      });
    }
  }
}
