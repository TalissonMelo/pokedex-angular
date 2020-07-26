import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../service/pokemon-service';
import { Pokemon } from '../model/pokemon.model';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent implements OnInit {

  pokemons : Pokemon[]

  constructor(private service: PokemonService) { }

  ngOnInit(): void {
    this.service.findAll().subscribe(pokemon => this.pokemons = pokemon);
  }

  delete(id: string){
    this.service.delete(id).subscribe(response => { this.ngOnInit()});
  }
}
