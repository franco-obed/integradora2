import {ErrorHandler, NgModule} from '@angular/core';
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
import {AlertController, IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {BluetoothSerial} from "@ionic-native/bluetooth-serial/ngx";
import {RouteReuseStrategy} from "@angular/router";
import { BluetoothComponent } from './bluetooth/bluetooth.component';
import { Lectura } from './lectura/lectura.model';
import { EscaneoComponent } from './escaneo/escaneo.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BienvenidoComponent,
    NuevaSesionComponent,
    RegistroComponent,
    PrincipalComponent,
    LeerHumedadComponent,
    PorcentajeHumedadComponent,
    NivelHumedadComponent,
    PorcentajeHumedadMedioComponent,
    PorcentajeHumedadBajoComponent,
    NivelHumedadMedioComponent,
    NivelHumedadBajoComponent,
    BluetoothComponent,
    LecturaComponent,
    EscaneoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot()
  ],
  providers: [
    AlertController,
    BluetoothSerial,
    BluetoothComponent,

    { provide: ErrorHandler, useClass: ErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
