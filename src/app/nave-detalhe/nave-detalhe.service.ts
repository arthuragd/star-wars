import { ListarPersonagens } from './../shared/interface/personagens.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ListarNaves } from './../shared/interface/naves.interface';
import { ListarFilmes } from './../shared/interface/filmes.interface';


@Injectable({
  providedIn: 'root'
})
export class NaveDetalheService {

  constructor(
    private http: HttpClient
  ) { 
      
  }

  public getNaves(id): Observable<ListarNaves> {
    const url = `https://swapi.co/api/starships/${id}`;
    return this.http.get<ListarNaves>(url,
      { withCredentials: false, responseType: 'json' }
    );
  }

  public getFilmes(link):Observable<ListarFilmes>{
    return this.http.get<ListarFilmes>(link,
      { withCredentials: false, responseType: 'json' }
    );
  }

  public getPilotos(link):Observable<ListarPersonagens>{
    return this.http.get<ListarPersonagens>(link,
      { withCredentials: false, responseType: 'json' }
    );
  }


}