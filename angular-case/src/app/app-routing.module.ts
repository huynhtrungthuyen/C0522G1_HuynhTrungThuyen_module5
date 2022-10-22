import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FacilityListComponent} from './facility/facility-list/facility-list.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'facility/facility-list', component: FacilityListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
