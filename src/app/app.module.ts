import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//MODULES
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';


import { AppComponent } from './app.component';
import { NopagefoundComponent } from './404/404.component';


@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule, 
    SharedModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
