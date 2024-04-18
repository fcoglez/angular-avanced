import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { BaseChartDirective } from 'ng2-charts';

import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafic1Component } from './grafic1/grafic1.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';





@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafic1Component,
    PagesComponent,
    AccountSettingsComponent
  ],

  exports:[
    DashboardComponent,
    ProgressComponent,
    Grafic1Component,
    PagesComponent,
    AccountSettingsComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    BaseChartDirective,
    SharedModule,
    AppRoutingModule, 
    ComponentsModule
  ]
})
export class PagesModule { }
