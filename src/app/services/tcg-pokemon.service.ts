import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class TcgPokemonService {

  baseurl = 'https://api.pokemontcg.io/v1';
  initialPagination = 1;
  searchByName = '';

  constructor(private http: HttpClient, private utils: UtilsService) { }

  GetPokemonCards(pagination?): Observable<any> {
    if(!this.searchByName){
      if(pagination){
        this.initialPagination = this.utils.addPagination(this.initialPagination);
      }
      return this.http.get<any>((pagination ? this.baseurl + '/cards?page=' + this.initialPagination : this.baseurl + '/cards'))
      .pipe(
        tap(res => {return res}),
        retry(1),
        catchError(this.utils.errorHandl)
      ) 
    }
  }
  GetPokemonCardByName(name: string): Observable<any>{
    return this.http.get<any>(this.baseurl + '/cards?name=' + name)
    .pipe(
      tap(res => {
        this.searchByName = name;
        return res}),
      retry(1),
      catchError(this.utils.errorHandl)
    ) 
  }

  // GetPokemonByName(name: string): Observable<any>{
  //   return this.http.get<any>(this.baseurl + '/pokemon/' + name)
  //     .pipe(
  //       tap(res => {   
  //         res.types = this.utils.reverseTypes(res.types);
  //         res.moves.forEach(mv => {
  //           mv.move.name = this.utils.removeHyphen(mv.move.name);
  //         });
  //         res.abilities.forEach(ab => {
  //           ab.ability.name = this.utils.removeHyphen(ab.ability.name);
  //         });
  //         res.stats.forEach(st => {
  //           st.stat.nameFormatted = this.utils.removeHyphen(st.stat.name);
  //         });
  //       }),
  //       retry(1),
  //       catchError(this.utils.errorHandl)
  //     )
  // }

  // GetFlavorTexts(url){
  //   return this.http.get<any>(url)
  //   .pipe(
  //     tap(res => {
  //       res.flavorSelected = this.utils.filterLanguage(res.flavor_text_entries, 'en');
  //     }),
  //     retry(1),
  //     catchError(this.utils.errorHandl)
  //   )
  // };

  // GetMoveDetails(moveUrl){
  //   return this.http.get<any>(moveUrl)
  //   .pipe(
  //     tap(res => {
  //       res.flavorSelected = this.utils.filterLanguage(res.flavor_text_entries, 'en');
  //       res.effectSelected = this.utils.filterLanguage(res.effect_entries, 'en');
  //       res.nameFormatted = this.utils.removeHyphen(res.name);
  //     }),
  //     retry(1),
  //     catchError(this.utils.errorHandl)
  //   )
  // };

  // GetAbilityDetails(moveUrl){
  //   return this.http.get<any>(moveUrl)
  //   .pipe(
  //     tap(res => {
  //       res.flavorSelected = this.utils.filterLanguage(res.flavor_text_entries, 'en');
  //       res.effectSelected = this.utils.filterLanguage(res.effect_entries, 'en');
  //     }),
  //     retry(1),
  //     catchError(this.utils.errorHandl)
  //   )
  // }
}
