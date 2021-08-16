import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { NuevaSesionComponent } from './nueva-sesion/nueva-sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { PrincipalComponent } from './principal/principal.component';
import { LeerHumedadComponent } from './leer-humedad/leer-humedad.component';
import { LecturaComponent } from './lectura/lectura.component';
import { PorcentajeHumedadComponent } from './lectura/porcentaje-humedad/porcentaje-humedad.component';
import { NivelHumedadComponent } from './lectura/nivel-humedad/nivel-humedad.component';
import { PorcentajeHumedadMedioComponent } from './lectura/porcentaje-humedad-medio/porcentaje-humedad-medio.component';
import { PorcentajeHumedadBajoComponent } from './lectura/porcentaje-humedad-bajo/porcentaje-humedad-bajo.component';
import { NivelHumedadMedioComponent } from './lectura/nivel-humedad-medio/nivel-humedad-medio.component';
import { NivelHumedadBajoComponent } from './lectura/nivel-humedad-bajo/nivel-humedad-bajo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BienvenidoComponent,
    NuevaSesionComponent,
    RegistroComponent,
    PrincipalComponent,
    LeerHumedadComponent,
    LecturaComponent,
    PorcentajeHumedadComponent,
    NivelHumedadComponent,
    PorcentajeHumedadMedioComponent,
    PorcentajeHumedadBajoComponent,
    NivelHumedadMedioComponent,
    NivelHumedadBajoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
