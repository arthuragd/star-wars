import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { ListarPlanetas } from '../shared/interface/planetas.interface';
import { PlanetasService } from './planetas.service';

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.css']
})
export class PlanetasComponent implements OnInit {

  public listarPlanetas: Array<ListarPlanetas>
  public subscription: Subscription;
  public pag = 0;
  public avanc = true;

  constructor(
    private listarPlanetasService: PlanetasService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loadPlanetas();
  }

  public loadPlanetas(): any {
    if (this.avanc) {
      this.pag = this.pag + 1;
    }
    if (this.avanc == false) {
      this.pag = this.pag - 1;
    }
    this.subscription = this.listarPlanetasService.getPlanetas(this.pag).subscribe(
      (planetas) => {
        this.listarPlanetas = planetas;
      }
    );
  }

}
