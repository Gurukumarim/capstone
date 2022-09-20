import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PlansComponent } from './components/plans/plans.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { InsuranceComponent } from './components/insurance/insurance.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from './admin/admin.module';
import { SearchComponent } from './components/search/search.component';
import { InsuranceDetailsComponent } from './components/insurance-details/insurance-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlansComponent,
    ContactusComponent,
    InsuranceComponent,
    PagenotfoundComponent,
    NavbarComponent,
    SearchComponent,
    InsuranceDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AdminModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
