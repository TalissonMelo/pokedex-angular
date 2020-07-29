import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PokemonService } from '../service/pokemon-service';
import { Pokemon } from '../model/pokemon.model';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent implements OnInit {

  pokemons: Pokemon[]
  @Output() viewPokemon = new EventEmitter();

  constructor(private service: PokemonService) { }

  ngOnInit(): void {
    this.findAll()
  }

  delete(id: string) {
    this.service.delete(id).subscribe(response => { this.ngOnInit() });
  }

  view(pokemon: Pokemon) {
    this.viewPokemon.emit(pokemon);
  }

  findAll() {
    this.service.findAll().subscribe(pokemon => this.pokemons = pokemon);
  }
}
