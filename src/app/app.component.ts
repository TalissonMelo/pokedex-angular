import { Component, OnInit } from '@angular/core';
import { Pokemon } from './model/pokemon.model';
import { PokemonService } from './service/pokemon-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  pokemon: Pokemon
  constructor(private service: PokemonService) { }
  
  ngOnInit(): void {
  }
  
  viewPokemon(objPokemon){
    this.pokemon = objPokemon;
  }

  delete(){
    this.service.deleteAll().subscribe(response => console.log(response));
    this.load()
  }

  load(){
    location.reload()
  }
}
