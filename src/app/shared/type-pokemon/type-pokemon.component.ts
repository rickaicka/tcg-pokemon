import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-type-pokemon',
  templateUrl: './type-pokemon.component.html',
  styleUrls: ['./type-pokemon.component.scss']
})
export class TypePokemonComponent implements OnInit {

  @Input()typePokemon: String;
  
  constructor() { }

  ngOnInit(): void {
  }

}
