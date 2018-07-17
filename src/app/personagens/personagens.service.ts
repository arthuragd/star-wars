import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ListarPersonagens } from '../shared/interface/personagens.interface';



@Injectable({
  providedIn: 'root'
})
export class PersonagensService {

  constructor(
    private http: HttpClient
  ) { }

  public getPersonagens(id): Observable<ListarPersonagens[]> {
    const url = 'https://swapi.co/api/people/?page=' + id;
    return this.http.get<ListarPersonagens[]>(url,
      { withCredentials: false, responseType: 'json' }
    );
  }


}