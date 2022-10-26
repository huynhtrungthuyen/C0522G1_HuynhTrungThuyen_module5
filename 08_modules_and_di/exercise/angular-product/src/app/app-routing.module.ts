import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductModule} from './product/product.module';
import {RouterModule, Routes} from '@angular/router';
import {CategoryModule} from './category/category.module';

const routes: Routes = [
  {path: 'product', loadChildren: () => ProductModule},
  {path: 'category', loadChildren: () => CategoryModule}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}
