import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  character: any;

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
         if (id) {
            this.characterService.getCharacter(parseInt(id)).subscribe(character => {
              this.character = character;
            })
         }    
    });
  }
}