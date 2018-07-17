import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ListarPersonagens } from '../shared/interface/personagens.interface';
import { PersonagensService } from './personagens.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.css']
})
export class PersonagensComponent implements OnInit {

  public listarPersonagens: Array<ListarPersonagens>;
  public subscription: Subscription;
  public pag = 0;
  public avanc = true;

  constructor(
    private listarPersonagensService: PersonagensService,
    private router: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.loadPersonagens();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public loadPersonagens(): any {
    if (this.avanc) {
      this.pag = this.pag + 1;
    }
    if (this.avanc == false) {
      this.pag = this.pag - 1;
    }
    this.subscription = this.listarPersonagensService.getPersonagens(this.pag).subscribe(
      (personagem) => {
        this.listarPersonagens = personagem;
      }
    );
  }

}
