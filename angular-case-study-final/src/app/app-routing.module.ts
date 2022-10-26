import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FacilityModule} from './facility/facility.module';
import {CustomerModule} from './customer/customer.module';
import {ContractModule} from './contract/contract.module';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'facility', loadChildren: () => import('./facility/facility.module').then(module => module.FacilityModule)},
  {path: 'customer', loadChildren: () => import('./customer/customer.module').then(module => module.CustomerModule)},
  {path: 'contract', loadChildren: () => import('./contract/contract.module').then(module => module.ContractModule)}
  // {path: 'facility', loadChildren: () => FacilityModule},
  // {path: 'customer', loadChildren: () => CustomerModule},
  // {path: 'contract', loadChildren: () => ContractModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
