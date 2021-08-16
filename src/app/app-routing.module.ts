import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NuevaSesionComponent } from './nueva-sesion/nueva-sesion.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { RegistroComponent } from './registro/registro.component';
import { PrincipalComponent } from './principal/principal.component';
import { LeerHumedadComponent } from './leer-humedad/leer-humedad.component';
import {LecturaComponent} from "./lectura/lectura.component";
import { NivelHumedadComponent } from './lectura/nivel-humedad/nivel-humedad.component';
import { NivelHumedadMedioComponent } from './lectura/nivel-humedad-medio/nivel-humedad-medio.component';
import {NivelHumedadBajoComponent} from "./lectura/nivel-humedad-bajo/nivel-humedad-bajo.component";
import { PorcentajeHumedadComponent } from './lectura/porcentaje-humedad/porcentaje-humedad.component';
import { PorcentajeHumedadBajoComponent } from './lectura/porcentaje-humedad-bajo/porcentaje-humedad-bajo.component';
import { PorcentajeHumedadMedioComponent } from './lectura/porcentaje-humedad-medio/porcentaje-humedad-medio.component';

const routes: Routes = [{
  path: '', component: AppComponent},
  {
    path: '', component: BienvenidoComponent,
  },
  {
    path: 'welcome', component: NuevaSesionComponent,
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'registro', component: RegistroComponent
  },
  {
    path: 'principal', component: PrincipalComponent,
    children: [
      {
        path: 'leer_humedad', component: LeerHumedadComponent,
      },
      {
        path: 'lectura', component: LecturaComponent,
        children: [
          {
            path: 'nivel_humedad', component: NivelHumedadComponent,
          },
          {
            path: 'nivel_humedad_bajo', component: NivelHumedadBajoComponent,
          },
          {
            path: 'nivel_humedad_medio', component: NivelHumedadMedioComponent,
          },
          {
            path: 'porcentaje_humedad', component: PorcentajeHumedadComponent,
          },
          {
            path: 'porcentaje_humedad_bajo', component: PorcentajeHumedadBajoComponent,
          },
          {
            path: 'porcentaje_humedad_medio', component: PorcentajeHumedadMedioComponent,
          }
        ]
      }
    ]
  }

];

@NgModule({


  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
