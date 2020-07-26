import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormPokemonComponent } from './form-pokemon/form-pokemon.component';
import { ViewPokemonComponent } from './view-pokemon/view-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { HttpClientModule } from '@angular/common/http';
import {PokemonService} from './service/pokemon-service'


@NgModule({
  declarations: [
    AppComponent,
    FormPokemonComponent,
    ViewPokemonComponent,
    ListPokemonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    PokemonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
