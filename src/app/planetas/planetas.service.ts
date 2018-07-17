import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ListarPlanetas } from './../shared/interface/planetas.interface';

@Injectable({
  providedIn: 'root'
})
export class PlanetasService {

  constructor(
    private http: HttpClient
  ) { }

  public getPlanetas(id): Observable<ListarPlanetas[]> {
    const url = 'https://swapi.co/api/planets/?page=' + id;
    return this.http.get<ListarPlanetas[]>(url,
      { withCredentials: false, responseType: 'json' }
    );
  }
}
