import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@NgModule({
    declarations: [NavBarComponent],
    exports: [
        NavBarComponent
    ],
    imports: [
        CommonModule,
        HeaderRoutingModule
    ]
})
export class HeaderModule { }
