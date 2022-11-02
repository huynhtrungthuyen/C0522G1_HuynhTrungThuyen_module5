import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccountListComponent} from './account/account-list/account-list.component';
import {AccountEditComponent} from './account/account-edit/account-edit.component';
import {AccountCreateComponent} from './account/account-create/account-create.component';


const routes: Routes = [
  {path: '', component: AccountListComponent},
  {path: 'edit/:id', component: AccountEditComponent},
  {path: 'create', component: AccountCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
