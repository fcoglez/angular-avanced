import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { registerLocaleData } from '@angular/common';
import { RegisterComponent } from './auth/register/register.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafic1Component } from './pages/grafic1/grafic1.component';
import { NopagefoundComponent } from './404/404.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  
  {
    path:'',
    component: PagesComponent,
    children:[
      {path: 'dashboard', component: DashboardComponent},
      {path: 'progress', component: ProgressComponent},
      {path: 'grafic1', component: Grafic1Component},
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    ]
  },
 
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  
  
  //Si no encuentra ninguna de las rutas de arriba, muestra el componente nopagefound.
  {path: '**', component: NopagefoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
