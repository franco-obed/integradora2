import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NuevaSesionComponent } from './nueva-sesion/nueva-sesion.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';

const routes: Routes = [{
  path: '', component: AppComponent},
  {
    path: '', component: BienvenidoComponent,
  },
  {
    path: 'welcome', component: NuevaSesionComponent,
  },
  {
    path: 'login', component: LoginComponent
  }

];

@NgModule({


  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
