import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { HumedalesComponent } from './humedales/humedales.component';
import { InformacionComponent } from './informacion/informacion.component'

const routes: Routes = [
  {path:'', component: InicioComponent, pathMatch: 'full'},
  {path:'inicio', component: InicioComponent},
  {path:'humedales', component: HumedalesComponent},
  {path:'informacion', component: InformacionComponent},
  {path:'humedales/:id', component: HumedalesComponent},
  {path:'iniciar-sesion', component: IniciarSesionComponent},
  {path:'crear-cuenta', component: CrearCuentaComponent},
  {path:'**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
