import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetasComponent } from './planetas.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PlanetasComponent],
  exports: [PlanetasComponent]
})
export class PlanetasModule { }
