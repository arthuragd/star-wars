import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';


import { PersonagensComponent } from './personagens/personagens.component';
import { HomeComponent } from './home/home.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { PersonagemDetalheComponent } from './personagem-detalhe/personagem-detalhe.component';
import { PlanetasComponent } from './planetas/planetas.component';

const routes: Routes = [
  {path: 'personagens', component: PersonagensComponent },
  {path: 'personagem/:id', component: PersonagemDetalheComponent},
  {path: 'planetas', component: PlanetasComponent},
  {path: '', component: HomeComponent },
  {path: '**', component: NaoEncontradoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

 }
