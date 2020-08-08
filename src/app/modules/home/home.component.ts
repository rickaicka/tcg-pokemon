import { Component, OnInit} from '@angular/core';
import { TcgPokemonService } from 'src/app/services/tcg-pokemon.service';
import { UtilsService } from 'src/app/services/utils.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pokemons = []
  registerForm: FormGroup;
  submitted = false;

  constructor(
    private tcgPokemonService: TcgPokemonService, 
    private utils: UtilsService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void { 
    this.registerForm = this.formBuilder.group({
      pokemonName: [''],
    });   
    window.scrollTo(0,0);
    this.tcgPokemonService.GetPokemonCards().subscribe((data: any) => {
      this.pokemons = data.cards.sort(this.utils.dynamicSort('name'));
      data.cards.forEach(c => {
        c.types = this.utils.lowerCaseTypes(c.types)
      });
    });
  }

  searchCard(){
    this.submitted = true;
    this.tcgPokemonService.GetPokemonCardByName(this.registerForm.value.pokemonName).subscribe((data: any) => {
      this.pokemons = data.cards.sort(this.utils.dynamicSort('name'));
      data.cards.forEach(c => {
        c.types = this.utils.lowerCaseTypes(c.types)
      });
    });
  }
}
