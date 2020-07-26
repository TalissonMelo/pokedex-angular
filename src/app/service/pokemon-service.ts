import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject, Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Pokemon } from '../model/pokemon.model';
import { API } from '../app.api';

@Injectable()
export class PokemonService {
    
    constructor(private http: HttpClient){
    }

    findAll(): Observable<Pokemon[]> {
        return this.http.get<Pokemon[]>(`${API}/pokemons`)
    }

    delete(id: string){
        return this.http.delete(`${API}/pokemons/${id}`)
    }

    deleteAll(){
        return this.http.delete(`${API}/pokemons`)
    }

    findById(id: string): Observable<Pokemon> {
        return this.http.get<Pokemon>(`${API}/pokemons/${id}`)
    }

    insertPokemon(pokemon: Pokemon){
        return this.http.post(`${API}/pokemons`, pokemon ,{
            observe: 'response',
            responseType: 'text'
        })
    }
}