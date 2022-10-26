import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CategoryRoutingModule} from './category-routing.module';
import {CategoryListComponent} from './category-list/category-list.component';
import {CategoryDeleteComponent} from './category-delete/category-delete.component';
import {CategoryEditComponent} from './category-edit/category-edit.component';
import {CategoryCreateComponent} from './category-create/category-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [CategoryListComponent, CategoryDeleteComponent, CategoryEditComponent, CategoryCreateComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class CategoryModule {
}
