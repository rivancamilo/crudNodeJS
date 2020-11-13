import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarlateralComponent } from './conponents/navbarlateral/navbarlateral.component';
import { NavbartopComponent } from './conponents/navbartop/navbartop.component';
import { FooterComponent } from './conponents/footer/footer.component';

import { ListaUsuariosComponent } from './conponents/lista-usuarios/lista-usuarios.component';
import { NuevoUsuarioComponent } from './conponents/nuevo-usuario/nuevo-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarlateralComponent,
    NavbartopComponent,
    FooterComponent,
    ListaUsuariosComponent,
    NuevoUsuarioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
