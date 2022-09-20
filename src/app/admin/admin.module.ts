import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddInsuranceComponent } from './components/add-insurance/add-insurance.component';
import { UpdateInsuranceComponent } from './components/update-insurance/update-insurance.component';
import { DeleteInsuranceComponent } from './components/delete-insurance/delete-insurance.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './components/admin/admin.component';
// import { InsuranceComponent } from '../components/insurance/insurance.component';


@NgModule({
  declarations: [
  
    AddInsuranceComponent,
    UpdateInsuranceComponent,
    DeleteInsuranceComponent,
    // InsuranceComponent
    AdminComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
