import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],  
})

export class HomePage { 
    
    Devices: any
    constructor(private bluetoothSerial:BluetoothSerial, private alertController:AlertController){}

    //Metodo para saber si el BT esta activado, si lo esta manda lista de dispositivos conectados anteriormente
    ActivarBT(){
        this.bluetoothSerial.isEnabled().then(response => {
            this.BtEncendido('Bluetooth Encendido');
            this.ListDevices();
        }, error => {
            this.BtEncendido("Bluetooth apagado")
        
        })
    }

    //Metodo para crear la lista de los dispositivos, se imprime en home.page.html en el ngFor
    ListDevices(){
        this.bluetoothSerial.list().then(response => {
            this.Devices=response
        }, error=> {
            console.log("Error")
        })
    }
    
    //Para conectar a BT
    connect(address: string){
        this.bluetoothSerial.connect(address).subscribe(succes => {   
        }, error =>
        console.log("Error al conectar"))
    }
    
    deviceConnected(){
        this.bluetoothSerial.subscribe('/n').subscribe(success=> {
            this.hundler(success)
        }, error=> {
            console.log("Ocurrio un error")
        });
        
    }
    
    hundler(value: any){
        console.log(value)
    }

    //Metodo para desconectar 
    disconnected(){
        this.bluetoothSerial.disconnect()
        console.log("Dispositivo desconectado")
    }
    
    async BtEncendido(msg: string){
        const alert= await this.alertController.create({
            header: 'Alerta',
            message: msg,
            buttons: [{
                text: 'Okay',
                handler: () => {
                    console.log("Okay")
                }
            }]

        })
    }
}