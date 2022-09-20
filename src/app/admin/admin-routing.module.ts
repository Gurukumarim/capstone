import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInsuranceComponent } from './components/add-insurance/add-insurance.component';
import { AdminComponent } from './components/admin/admin.component';
import { DeleteInsuranceComponent } from './components/delete-insurance/delete-insurance.component';
import { UpdateInsuranceComponent } from './components/update-insurance/update-insurance.component';

const routes: Routes = [
  {path:'admin',component:AdminComponent,
    children:[
      {path:'addInsurance',component:AddInsuranceComponent},
      {path:'deleteInsurance',component:DeleteInsuranceComponent},
      {path:'updateInsurance',component:UpdateInsuranceComponent}
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
