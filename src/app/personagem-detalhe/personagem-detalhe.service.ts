import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ListarPersonagens } from '../shared/interface/personagens.interface';
import { ListarFilmes } from './../shared/interface/filmes.interface';
import { ListarPlanetas } from './../shared/interface/planetas.interface';
import { ListarNaves } from './../shared/interface/naves.interface';
import { ListarVeiculos } from '../shared/interface/veiculos.interface';
import { ListarEspecies } from './../shared/interface/especies.interface';




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

  public getFilmes(link):Observable<ListarFilmes>{
    return this.http.get<ListarFilmes>(link,
      { withCredentials: false, responseType: 'json' }
    );
  }

  public getPlaneta(link): Observable<ListarPlanetas>{
    return this.http.get<ListarPlanetas>(link,
      { withCredentials: false, responseType: 'json' }
    );
  }

  public getNave(link): Observable<ListarNaves>{
    return this.http.get<ListarNaves>(link,
      { withCredentials: false, responseType: 'json' }
    );
  }

  public getVeiculo(link): Observable<ListarVeiculos>{
    return this.http.get<ListarVeiculos>(link,
      { withCredentials: false, responseType: 'json' }
    );
  }

  public getEspecie(url): Observable<ListarEspecies>{
    return this.http.get<ListarEspecies>(url,
      { withCredentials: false, responseType: 'json' }
    );
  }


}