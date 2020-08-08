import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HeaderComponent} from './header/header.component';
import { RouterModule } from '@angular/router';
import { SimplebarAngularModule } from 'simplebar-angular';
import { CardPokemonComponent } from './card-pokemon/card-pokemon.component';
import { TypePokemonComponent } from './type-pokemon/type-pokemon.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    CardPokemonComponent,
    TypePokemonComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SimplebarAngularModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    CardPokemonComponent,
    TypePokemonComponent,

    SimplebarAngularModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }
