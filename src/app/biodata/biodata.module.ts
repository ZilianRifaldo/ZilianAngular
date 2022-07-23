import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BiodataRoutingModule } from './biodata-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    BiodataRoutingModule
  ]
})
export class BiodataModule { }
