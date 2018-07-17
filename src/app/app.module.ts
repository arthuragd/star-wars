import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { AppRoutingModule } from './app-routing.module';
import { PersonagensComponent } from './personagens/personagens.component';
import { HomeComponent } from './home/home.component';
import { PersonagemDetalheComponent } from './personagem-detalhe/personagem-detalhe.component';
import { PlanetasComponent } from './planetas/planetas.component';

@NgModule({
  declarations: [
    AppComponent,
    NaoEncontradoComponent,
    PersonagensComponent,
    HomeComponent,
    PersonagemDetalheComponent,
    PlanetasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
