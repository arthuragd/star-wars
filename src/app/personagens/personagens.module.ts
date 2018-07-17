import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PersonagensComponent } from './personagens.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [PersonagensComponent],
  exports: [
    PersonagensComponent
  ]
})
export class PersonagensModule { }
