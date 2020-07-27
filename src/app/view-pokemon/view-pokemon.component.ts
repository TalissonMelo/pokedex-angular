import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../model/pokemon.model';

@Component({
  selector: 'app-view-pokemon',
  templateUrl: './view-pokemon.component.html',
  styleUrls: ['./view-pokemon.component.css']
})
export class ViewPokemonComponent {

  @Input() pokemon: Pokemon



}
