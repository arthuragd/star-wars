import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ListarPersonagens } from '../shared/interface/personagens.interface';
import { ListarFilmes } from './../shared/interface/filmes.interface';



@Injectable({
  providedIn: 'root'
})

export class PersonagemDetalheService {

  constructor(
    private http: HttpClient
  ) { }

  public getPersonagem(id): Observable<ListarPersonagens> {
    const url = `https://swapi.co/api/people/${id}`;
    return this.http.get<ListarPersonagens>(url,
      { withCredentials: false, responseType: 'json' }
    );
  }

  public getFilmes():Observable<ListarFilmes[]>{
    const url = `https://swapi.co/api/films/`;
    return this.http.get<ListarFilmes[]>(url,
      { withCredentials: false, responseType: 'json' }
    );
  }


}