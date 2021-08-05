import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-nueva-sesion',
  templateUrl: './nueva-sesion.component.html',
  styleUrls: ['./nueva-sesion.component.css']
})
export class NuevaSesionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() show: boolean = true;
  @Input() buttonName?: any;

  @Output() toggleEvent: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();


   toggle() {
    this.toggleEvent.emit();
  }
}
