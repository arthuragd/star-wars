import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PersonagemDetalheService } from './personagem-detalhe.service';
import { PersonagemDetalheComponent } from './personagem-detalhe.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    PersonagemDetalheComponent
  ],
  exports: [
    PersonagemDetalheComponent
  ],
  providers:[PersonagemDetalheService]
})
export class PersonagemDetalheModule { }
