import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';

import { EditFacilityComponent } from './edit-facility/edit-facility.component';
import { AddFacilityComponent } from './add-facility/add-facility.component';
import { CustomerComponent } from './customer/customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddContractComponent } from './add-contract/add-contract.component';
import { ContractComponent } from './contract/contract.component';
import { FacilityListComponent } from './facility/facility-list/facility-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FacilityComponent,
    EditFacilityComponent,
    AddFacilityComponent,
    CustomerComponent,
    EditCustomerComponent,
    AddCustomerComponent,
    AddContractComponent,
    ContractComponent,
    FacilityListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
