import { Component } from '@angular/core';
import { Pokemon } from './model/pokemon.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pokemon: Pokemon
  
  viewPokemon(objPokemon){
    this.pokemon = objPokemon;
  }
}
