import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{
  path:'biodata/dashboard',
  component: DashboardComponent
},{
  path:'biodata/create',
  component: CreateComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BiodataRoutingModule { }
