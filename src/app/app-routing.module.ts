import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/components/admin/admin.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { HomeComponent } from './components/home/home.component';
import { InsuranceDetailsComponent } from './components/insurance-details/insurance-details.component';
import { InsuranceComponent } from './components/insurance/insurance.component';
import { PlansComponent } from './components/plans/plans.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'plans',component:PlansComponent},
  {path:'insurances',component:InsuranceComponent},
  {path:'insurance-details/:insuranceId',component:InsuranceDetailsComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'admin',component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
