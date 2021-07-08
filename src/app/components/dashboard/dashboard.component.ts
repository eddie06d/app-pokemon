import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  typePokemon: string = '';
  listTypes: any[];
  pokemons: any[];
  pokemon: any;

  constructor(private pokemonService: PokemonService, private http: HttpClient) { }

  ngOnInit(): void {
    //this.pokemonService.getPokemonByName('pikachu').subscribe(data => console.log(data));
    //this.pokemonService.getPokemonsByType(19).subscribe(data => console.log(data));
    this.listTypes = this.pokemonService.typesPokemon;
  }

  catchFilter($event) {
    //console.log($event.target.value);
    this.typePokemon = $event.target.value;
  }

  searchByType() {
    this.pokemons = [];
    this.pokemonService.getPokemonsByType(parseInt(this.typePokemon)).subscribe(data => {
      for(let poke of data.pokemon){
        this.http.get(poke.pokemon.url).subscribe(p => this.pokemons.push(p));
      }
      //console.log(data.pokemon);
    });
  }

}
