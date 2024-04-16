import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { NopagefoundComponent } from './404/404.component';


const routes: Routes = [

  //path: '/dashboard' PagesRouting
  //path: '/auth' AuthRouting
  
  //Si no encuentra ninguna de las rutas de arriba, muestra el componente nopagefound.
  {path: '**', component: NopagefoundComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule, 
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
