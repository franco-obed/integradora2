import { Component, OnInit } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import {error} from "@angular/compiler/src/util";
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bluetooth',
  templateUrl: './bluetooth.component.html',
  styleUrls: ['./bluetooth.component.css']
})
export class BluetoothComponent implements OnInit {
  devices: any;
  constructor(private bluetoothSerial: BluetoothSerial, private alertController: AlertController, private router: Router) {  }


  ngOnInit(): void {
  }

  readBtSerial() {
    return this.bluetoothSerial.read();
  }

  activarBluetooth() {
    this.bluetoothSerial.isEnabled().then(response => {
      this.isEnabled("isOn");
      this.listDevices();
    }, error=>{
      this.isEnabled("isOff");
    })
  }

  listDevices() {
    this.bluetoothSerial.list().then(response => {
      this.devices = response;
    }, error=>{
      console.log("error");
      }
    )
  }

  connect(address:any) {
    this.bluetoothSerial.connect(address).subscribe(success => {
      this.deviceConnected();
      this.redirect();
    },error=>{
      console.log("error");
    })
  }

  deviceConnected() {
    this.bluetoothSerial.subscribe('/n').subscribe(success=> {
      this.handler(success);
    })
  }

  handler(value: any) {
    console.log(value)
  }

  sendData() {
    this.bluetoothSerial.write("").then(response => {
      console.log("got it");
    }, error => {
      console.log("error");
    })
  }

  disconnect() {
    this.bluetoothSerial.disconnect();
    console.log("disconnected");
  }

  isEnabled(msg: string) {
    const alert = this.alertController.create({
      header:'Alerta',
      message: msg,
      buttons: [{
        text: 'Aceptar',
        handler:()=> {
          console.log("Aceptar") ;
        }
      }]

    })
  }

  redirect() {
    this.router.navigate(['/lectura']);
  }



}
