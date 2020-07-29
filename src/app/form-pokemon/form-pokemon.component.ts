import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../service/pokemon-service';
import { Pokemon } from '../model/pokemon.model';

@Component({
  selector: 'app-form-pokemon',
  templateUrl: './form-pokemon.component.html',
  styleUrls: ['./form-pokemon.component.css']
})
export class FormPokemonComponent implements OnInit {

  constructor(private service: PokemonService) { }

  ngOnInit(): void {
  }

  onSubmit(form) {
    this.service.insertPokemon(form).subscribe(response => {
      alert('Cadastrado Com Sucesso!.')
      location.reload()
    });
  }
}
