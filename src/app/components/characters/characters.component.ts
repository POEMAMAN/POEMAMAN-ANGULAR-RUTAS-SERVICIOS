import { Component, OnInit } from '@angular/core';
import { EmisorService } from 'src/app/services/emisor.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
})
export class CharactersComponent implements OnInit{

  characters: any[] = [];

constructor(private characterService: EmisorService){

}

ngOnInit(){
      this.characterService.getCharacters().subscribe((characters: any) => this.characters = characters)
}

}
