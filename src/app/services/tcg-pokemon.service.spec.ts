import { TestBed } from '@angular/core/testing';

import { TcgPokemonService } from './tcg-pokemon.service';

describe('PokedexService', () => {
  let service: TcgPokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TcgPokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
