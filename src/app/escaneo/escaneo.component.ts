import {Component, Input, OnInit} from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { BluetoothComponent } from '../bluetooth/bluetooth.component';
import {AlertController} from "@ionic/angular";


@Component({
  selector: 'app-escaneo',
  templateUrl: './escaneo.component.html',
  styleUrls: ['./escaneo.component.css']
})
export class EscaneoComponent implements OnInit {

  public humedad?: any
  public humedadNum?: number
  public nivelOptimo?: boolean
  public nivelMedio?: boolean
  public nivelBajo?: boolean

  constructor(public bluetoothSerial: BluetoothSerial, private bluetoothComponent: BluetoothComponent, private alertController: AlertController) { }

  readBtSerial() {
    this.bluetoothSerial.readUntil('\n').then(success => {
      this.humedad = success;
      this.humedadNum = Number(this.humedad);
    }, async failure => {
      let alert = await this.alertController.create({
        header: 'Ha ocurrido un error en la lectura!',
        message: failure,
        buttons: [{
          text: 'Aceptar'
        }]
      });
      await alert.present();
    });
    if (this.humedad! >= 60) {
      this.nivelBajo = false;
      this.nivelMedio = false;
      this.nivelOptimo = true;
    }
    else if((this.humedad! >=40) && (this.humedad! < 60)) {
      this.nivelBajo = false;
      this.nivelMedio = true;
      this.nivelOptimo = false;
    }

    else if(this.humedad! < 40) {
      this.nivelBajo = true;
      this.nivelMedio = false;
      this.nivelOptimo = false;
    }
  }




  ngOnInit(): void {
    this.readBtSerial();
  }

}
