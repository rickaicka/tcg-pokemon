import { Component, OnInit, Input, HostListener,  } from '@angular/core';
import { TcgPokemonService } from 'src/app/services/tcg-pokemon.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'tcg-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.scss']
})
export class CardPokemonComponent implements OnInit {

  constructor(private tcgPokemonService: TcgPokemonService, private utils: UtilsService) { }
  @Input() pokemons: any;  
  nextPage = false;
  ngOnInit(): void {
    this.pokemons.sort(this.utils.dynamicSort('name'));
  }

  @HostListener("window:scroll", ["$event"])
    onWindowScroll() {
    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;
    if(pos == max )   {
      this.NextPokemons();
    }
  }
  NextPokemons(){
    if(this.pokemons){ 
      this.nextPage = true;
      this.tcgPokemonService.GetPokemonCards(this.nextPage).subscribe((data: any) => {
        data.cards.forEach(element => {          
          element.types = this.utils.lowerCaseTypes(element.types)
          this.pokemons.push(element)
        });
      });
      this.pokemons.sort(this.utils.dynamicSort('name'));
    }
  }
}
