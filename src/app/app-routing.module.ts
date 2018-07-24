import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';


import { PersonagensComponent } from './personagens/personagens.component';
import { HomeComponent } from './home/home.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { PersonagemDetalheComponent } from './personagem-detalhe/personagem-detalhe.component';
import { PlanetasComponent } from './planetas/planetas.component';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { EspeciesComponent } from './especies/especies.component';
import { NavesComponent } from './naves/naves.component';
import { NaveDetalheComponent } from './nave-detalhe/nave-detalhe.component';
import { PlanetaDetalheComponent } from './planeta-detalhe/planeta-detalhe.component';

const routes: Routes = [
  {path: 'personagens', component: PersonagensComponent },
  {path: 'personagem/:id', component: PersonagemDetalheComponent},
  {path: 'planetas', component: PlanetasComponent},
  {path: 'planeta/:id', component: PlanetaDetalheComponent},
  {path: 'naves', component: NavesComponent },
  {path: 'nave/:id', component: NaveDetalheComponent },
  {path: 'veiculos', component: VeiculosComponent },
  {path: 'especies', component: EspeciesComponent },
  {path: '', component: HomeComponent },
  {path: '**', component: NaoEncontradoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

 }
