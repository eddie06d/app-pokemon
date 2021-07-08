import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  url: string = 'https://pokeapi.co/api/v2/';
  typesPokemon: any[] = [
    { id: 1, type: 'normal' },
    { id: 2, type: 'lucha' },
    { id: 3, type: 'volador' },
    { id: 4, type: 'veneno' },
    { id: 5, type: 'tierra' },
    { id: 6, type: 'roca' },
    { id: 7, type: 'bicho' },
    { id: 8, type: 'fantasma' },
    { id: 9, type: 'acero' },
    { id: 10, type: 'fuego' },
    { id: 11, type: 'agua' },
    { id: 12, type: 'planta' },
    { id: 13, type: 'eléctrico' },
    { id: 14, type: 'psíquico' },
    { id: 15, type: 'hielo' },
    { id: 16, type: 'dragón' },
    { id: 17, type: 'siniestro' },
    { id: 18, type: 'hada' }
  ];

  constructor(private http: HttpClient) { }

  getPokemonByName(name: string): Observable<any> {
    return this.http.get(`${this.url}pokemon/${name}`);
  }

  getPokemonByUrl(url: string): Observable<any> {
    return this.http.get(url);
  }

  /*
    1 --> tipo normal
    2 --> tipo lucha
    3 --> tipo volador
    4 --> tipo veneno
    5 --> tipo tierra
    6 --> tipo roca
    7 --> tipo bicho
    8 --> tipo fantasma
    9 --> tipo acero
    10 --> tipo fuego
    11 --> tipo agua
    12 --> tipo planta
    13 --> tipo eléctrico
    14 --> tipo psíquico
    15 --> tipo hielo
    16 --> tipo dragon
    17 --> tipo siniestro
    18 --> tipo hada
  */
  getPokemonsByType(type: number): Observable<any> {
    return this.http.get(`${this.url}type/${type}`);
  }

}
