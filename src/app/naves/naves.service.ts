import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ListarNaves } from './../shared/interface/naves.interface';


@Injectable({
  providedIn: 'root'
})
export class NavesService {

  constructor(
    private http: HttpClient
  ) { }

  public getNaves(id): Observable<ListarNaves[]> {
    const url = 'https://swapi.co/api/starships/?page=' + id;
    return this.http.get<ListarNaves[]>(url,
      { withCredentials: false, responseType: 'json' }
    );
  }


}