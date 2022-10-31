import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  characters: any[] = [];
  characterCount!: number;
  //Paginator
  length = 87;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10];

  // MatPaginator Output
  pageEvent!: PageEvent;

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    for (let pageNumbers = 1; pageNumbers <= 9; pageNumbers++) {
      this.charactersService
        .getCharacters(pageNumbers)
        .subscribe((characters) => {
          this.characterCount = +characters.count;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          characters.results.map((character: any) =>
            this.characters.push(character)
          );
        });
    }
  }
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput
        .split(',')
        .map((str) => +str);
    }
  }
}
