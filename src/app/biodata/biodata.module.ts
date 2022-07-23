import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BiodataRoutingModule } from './biodata-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    BiodataRoutingModule,
    FormsModule
  ]
})
export class BiodataModule { }
