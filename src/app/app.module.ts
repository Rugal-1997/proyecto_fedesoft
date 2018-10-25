import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { InicioComponent } from './inicio/inicio.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { HumedalesComponent } from './humedales/humedales.component';
import { ServiciosComponent } from './servicios/servicios.component';

import { UsuariosService } from './usuarios.service';
import { HumedalesService } from './humedales.service';
import { ServiciosService } from './servicios.service';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    InicioComponent,
    CrearCuentaComponent,
    IniciarSesionComponent,
    HumedalesComponent,
    ServiciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
  	UsuariosService,
  	HumedalesService,
  	ServiciosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
