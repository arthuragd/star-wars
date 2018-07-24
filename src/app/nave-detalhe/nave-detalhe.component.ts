import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ListarNaves } from './../shared/interface/naves.interface';
import { NaveDetalheService } from './nave-detalhe.service';
import { TouchSequence } from '../../../node_modules/@types/selenium-webdriver';
import { ListarFilmes } from './../shared/interface/filmes.interface';
import { ListarPersonagens } from '../shared/interface/personagens.interface';

@Component({
  selector: 'app-nave-detalhe',
  templateUrl: './nave-detalhe.component.html',
  styleUrls: ['./nave-detalhe.component.css']
})
export class NaveDetalheComponent implements OnInit {

  public getId: number;
  public info: ListarNaves;
  public filme: Array<ListarFilmes> = [];
  public piloto: Array<ListarPersonagens> = [];
  public existe: boolean;

  constructor(
    private naveDetalheService: NaveDetalheService,
    private router: ActivatedRoute
  ) {
    this.getId = this.router.snapshot.params['id'];
  }

  ngOnInit() {
    this.loadNave();
  }


  public loadNave() {
    this.naveDetalheService.getNaves(this.getId).subscribe(
      (nave) => {
        this.info = nave
      }
    );
  }

  public loadFilme() {
    try {
      if (this.info !== undefined) {
        for (let i = 0; i < this.info.films.length; i++) {
          this.naveDetalheService.getFilmes(this.info.films[i])
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

  public loadPiloto() {
    try {
      if (this.info !== undefined) {
        if (this.info.pilots.length) {
          for (let i = 0; i < this.info.pilots.length; i++) {
            this.naveDetalheService.getPilotos(this.info.pilots[i])
              .subscribe(piloto => this.piloto[i] = piloto);
          }
        }
        if(this.info.length == 0){
          this.existe = false;
        }
      }
    } catch (e) {
      console.log(e);
    }
  }

  pilotoVazio(): boolean {
    return this.piloto.length == 0;
  }

}
