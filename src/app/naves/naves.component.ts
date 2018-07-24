import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { ListarNaves } from '../shared/interface/naves.interface';
import { NavesService } from './naves.service';

@Component({
  selector: 'app-naves',
  templateUrl: './naves.component.html',
  styleUrls: ['./naves.component.css']
})
export class NavesComponent implements OnInit {

  public listarNaves: Array<ListarNaves>;
  public subscription: Subscription;
  public pag = 0;
  public avanc = true;

  constructor(
    private listarNavesService: NavesService,
    private router: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.loadNaves();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public loadNaves(): any {
    if (this.avanc) {
      this.pag = this.pag + 1;
    }
    if (this.avanc == false) {
      this.pag = this.pag - 1;
    }
    this.subscription = this.listarNavesService.getNaves(this.pag).subscribe(
      (nave) => {
        this.listarNaves = nave;
      }
    );
  }

}