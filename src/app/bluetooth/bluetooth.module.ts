import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BluetoothSerial } from "@ionic-native/bluetooth-serial/ngx";
import {RouteReuseStrategy, RouterModule} from "@angular/router";
import {IonicModule, IonicRouteStrategy} from "@ionic/angular";
import { BluetoothComponent } from './bluetooth.component';
import { AlertController } from '@ionic/angular';
import {AppRoutingModule} from "../app-routing.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IonicModule,

  ],
  providers: [
    BluetoothSerial,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ]
})
export class BluetoothModule { }
