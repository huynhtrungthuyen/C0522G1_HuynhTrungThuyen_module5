import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategoryListComponent} from './category-list/category-list.component';
import {CategoryCreateComponent} from './category-create/category-create.component';
import {CategoryEditComponent} from './category-edit/category-edit.component';
import {CategoryDeleteComponent} from './category-delete/category-delete.component';
import {CommonModule} from '@angular/common';


const routes: Routes = [
  {path: '', component: CategoryListComponent},
  {path: 'create', component: CategoryCreateComponent},
  {path: 'edit/:categoryId', component: CategoryEditComponent},
  {path: 'delete/:categoryId', component: CategoryDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
