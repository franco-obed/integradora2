import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';




@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    IonicModule
  ],
  providers:[
    BluetoothSerial
  ]
})
export class BluetoothModule { }
