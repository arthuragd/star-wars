import { Subscription, Observable, BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ListarPersonagens } from './../shared/interface/personagens.interface';
import { PersonagemDetalheService } from './personagem-detalhe.service';
import { ListarFilmes } from './../shared/interface/filmes.interface';
import { ListarPlanetas } from './../shared/interface/planetas.interface';
import { ListarNaves } from '../shared/interface/naves.interface';
import { ListarVeiculos } from './../shared/interface/veiculos.interface';
import { ListarEspecies } from './../shared/interface/especies.interface';


@Component({
  selector: 'app-personagem-detalhe',
  templateUrl: './personagem-detalhe.component.html',
  styleUrls: ['./personagem-detalhe.component.css']
})

export class PersonagemDetalheComponent implements OnInit {

  public info: ListarPersonagens;
  public subscription: Subscription;
  public getId: number;
  public filme: Array<ListarFilmes> = [];
  public planeta: ListarPlanetas;
  public naves: Array<ListarNaves> = [];
  public veiculos: Array<ListarVeiculos> = [];
  public especie: Array<ListarEspecies> = [];

  constructor(
    private PersonagemDetalheService: PersonagemDetalheService,
    private router: ActivatedRoute
  ) {
    this.getId = this.router.snapshot.params['id'];
  }

  ngOnInit() {
    this.loadPersonagem();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngAfterViewInit() {
    this.getTudo();
  }

  getTudo() {
    this.loadFilme();
    this.loadPlaneta();
    this.loadNave();
    this.loadVeiculos();
    this.loadEspecie();
    return true;
  }

  public loadPersonagem() {
    this.subscription = this.PersonagemDetalheService.getPersonagem(this.getId).subscribe(
      (info) =>
        this.info = info);
  }

  public loadFilme() {
    try {
      if (this.info !== undefined) {
        for (let i = 0; i < this.info.films.length; i++) {
          this.PersonagemDetalheService.getFilmes(this.info.films[i])
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

  public loadPlaneta(): boolean {
    try {
      if (this.info !== undefined) {
        this.PersonagemDetalheService.getPlaneta(this.info.homeworld).subscribe(
          (planeta) => {
            this.planeta = planeta;
          }
        );
      }
    } catch (e) {
      console.log(e);
    }
    return true;
  }

  public loadNave(): boolean {
    try {
      if (this.info !== undefined) {
        if (this.info.starships.length != 0) {
          for (let i = 0; i < this.info.starships.length; i++) {
            this.PersonagemDetalheService.getNave(this.info.starships[i])
              .subscribe(nave => this.naves[i] = nave);
          }
        }
      }
    } catch (e) {
      console.log(e);
    }
    return true;
  }

  public loadVeiculos(): boolean {
    try {
      if (this.info !== undefined) {
        if (this.info.vehicles.length != 0) {
          for (let i = 0; i < this.info.vehicles.length; i++) {
            this.PersonagemDetalheService.getVeiculo(this.info.vehicles[i])
              .subscribe(veiculo => this.veiculos[i] = veiculo);
          }
        }
      }
    } catch (e) {
      console.log(e);
    }
    return true;
  }

  public loadEspecie() {
    try {
      if (this.info !== undefined) {
        if(this.info.species.length !=0 )
        for (let i = 0; i < this.info.species.length; i++) {
          this.PersonagemDetalheService.getEspecie(this.info.species[i])
            .subscribe(especie => this.especie[i] = especie);
        }

      }
    } catch (e) {
      console.log(e);
    }
  }

}




