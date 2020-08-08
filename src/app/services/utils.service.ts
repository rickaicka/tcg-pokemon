import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  lowerCaseTypes(types){
    let typesLower = [];
    if(types && types.length > 0){
      types.forEach(t =>{
        t = t.toLowerCase();
        typesLower.push(t);
      });
    } else if (types == undefined) {
      typesLower.push('trainer')
    }
    
    return typesLower;
  }

  filterSprites(sprites){
    let filteredSprite: String;
    Object.keys(sprites).forEach(function(k){
      if(k == 'front_default'){
        filteredSprite = sprites[k];
      }
    });
    return filteredSprite;
  }

  filterLanguage(textEntries, language){
    return textEntries.filter(txt => txt.language.name === language)[0];
  }

  convertDecimeterToCentimeter(dm){
    return dm * 10;
  }

  convertHectogramToKilogram(hg){
    return hg / 10;
  }
  
  removeHyphen(text){
    let formattedText: String;
    if(text.includes('-')){
      formattedText = text.split("-").join(" ");
    } else{
      formattedText = text;
    }
    return formattedText;
  }

  errorHandl(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  dynamicSort(property) {
    let sortOrder = 1;

    if(property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }

    return function (a,b) {
      if(sortOrder == -1){
        return b[property].localeCompare(a[property]);
      } else {
        return a[property].localeCompare(b[property]);
      }        
    }
  }

  addPagination(page){
    return page + 1;
  }
}
