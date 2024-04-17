import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { ComponentsModule } from '../components/components.module';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafic1Component } from './grafic1/grafic1.component';
import { PagesComponent } from './pages.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafic1Component,
    PagesComponent
  ],

  exports:[
    DashboardComponent,
    ProgressComponent,
    Grafic1Component,
    PagesComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AppRoutingModule, 
    ComponentsModule
  ]
})
export class PagesModule { }
