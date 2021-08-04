import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iPlant';

  constructor(private router: Router) {

  }
  loadDefault() {
    this.router.navigate(['welcome']);
  }

  public show:boolean = true;
  public buttonName:any = 'Show';
  ngOnInit(): void {
  this.loadDefault();


  }

  public toggle(): void {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }



}



