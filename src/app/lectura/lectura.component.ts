import { Component, OnInit } from '@angular/core';
import { Lectura } from './lectura.model';
@Component({
  selector: 'app-lectura',
  templateUrl: './lectura.component.html',
  styleUrls: ['./lectura.component.css']
})
export class LecturaComponent implements OnInit {


  constructor( private lectura: Lectura) {  }
  ngOnInit(): void {
  }

}

