import { RouterModule, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ListarFilmes } from './../shared/interface/filmes.interface';
import { ListarPlanetas } from './../shared/interface/planetas.interface';
import { PlanetaDetalheService } from './planeta-detalhe.service';
import { ListarPersonagens } from './../shared/interface/personagens.interface';

@Component({
  selector: 'app-planeta-detalhe',
  templateUrl: './planeta-detalhe.component.html',
  styleUrls: ['./planeta-detalhe.component.css']
})
export class PlanetaDetalheComponent implements OnInit {

  public getId: number;
  public info: ListarPlanetas;
  public filme: Array<ListarFilmes> = [];
  public residentes: Array<ListarPersonagens> = [];
  public existe: boolean;

  constructor(
    private planetaDetalheService: PlanetaDetalheService,
    private router: ActivatedRoute
  ) {
    this.getId = this.router.snapshot.params['id'];
  }

  ngOnInit() {
    this.loadPlaneta();
  }

  public loadPlaneta() {
    this.planetaDetalheService.getPlaneta(this.getId).subscribe(
      (planeta) => {
        this.info = planeta;
      }
    );
  }

  public loadFilme() {
    try {
      if (this.info !== undefined) {
        for (let i = 0; i < this.info.films.length; i++) {
          this.planetaDetalheService.getFilmes(this.info.films[i])
            .subscribe(filme => this.filme[i] = filme);
        }

      }
    } catch (e) {
      console.log(e);
    }
  }

  filmeVazio(): boolean {
    return this.filme.length == 0;
  }

  public loadResidentes() {
    try {
      if (this.info !== undefined) {
        if (this.info.residents.length) {
          for (let i = 0; i < this.info.residents.length; i++) {
            this.planetaDetalheService.getResidentes(this.info.residents[i])
              .subscribe(residentes => this.residentes[i] = residentes);
          }
        }
        if(this.info.residents.length == 0){
          this.existe = false;
        }
      }
    } catch (e) {
      console.log(e);
    }
  }

  residenteVazio(): boolean {
    return this.residentes.length == 0;
  }

}
