import { ListarPlanetas } from './../shared/interface/planetas.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ListarNaves } from './../shared/interface/naves.interface';
import { ListarFilmes } from './../shared/interface/filmes.interface';
import { ListarPersonagens } from './../shared/interface/personagens.interface';


@Injectable({
  providedIn: 'root'
})
export class PlanetaDetalheService {

  constructor(
    private http: HttpClient
  ) { 
      
  }

  public getPlaneta(id): Observable<ListarPlanetas> {
    const url = `https://swapi.co/api/planets/${id}`;
    return this.http.get<ListarPlanetas>(url,
      { withCredentials: false, responseType: 'json' }
    );
  }

  public getFilmes(link):Observable<ListarFilmes>{
    return this.http.get<ListarFilmes>(link,
      { withCredentials: false, responseType: 'json' }
    );
  }

  public getResidentes(link):Observable<ListarPersonagens>{
    return this.http.get<ListarPersonagens>(link,
      { withCredentials: false, responseType: 'json' }
    );
  }



}