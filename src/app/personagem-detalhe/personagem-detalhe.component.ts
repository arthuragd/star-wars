
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ListarPersonagens } from './../shared/interface/personagens.interface';
import { PersonagemDetalheService } from './personagem-detalhe.service';
import { ListarFilmes } from './../shared/interface/filmes.interface';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';


@Component({
  selector: 'app-personagem-detalhe',
  templateUrl: './personagem-detalhe.component.html',
  styleUrls: ['./personagem-detalhe.component.css']
})
export class PersonagemDetalheComponent implements OnInit {

  public info: ListarPersonagens;
  public subscription: Subscription;
  public getId: number;
 
 
  constructor(
    private PersonagemDetalheService: PersonagemDetalheService,
    private listarFilmesService: PersonagemDetalheService,
    private router: ActivatedRoute
  ) {
    this.getId = this.router.snapshot.params['id'];
  }

  ngOnInit() {
    this.loadPersonagem();
   
  }

  public loadPersonagem(): any {
    this.subscription = this.PersonagemDetalheService.getPersonagem(this.getId).subscribe(
      (info) => {
        this.info = info;
        console.log(this.info);
      }
    );
  }


}
