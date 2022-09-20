import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from 'src/app/models/client';
import { Insurance } from 'src/app/models/insurance';
import { ClientService } from 'src/app/services/client.service';
import { LifeInsuranceService } from 'src/app/services/life-insurance.service';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.scss']
})
export class InsuranceComponent implements OnInit {

  insurances:Insurance[]=[];
  client:Client[]=[];
  insuranceObs$!:Observable<Insurance[]>
  clientObs$: Observable<Client[]> | undefined;

  constructor(private _insuranceService:LifeInsuranceService,private _clientService:ClientService,
              private _router:Router,
              private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.insuranceObs$=this._insuranceService.getInsurances();
    this.clientObs$=this._clientService.getClient();

  }

  show=(insuranceId:number)=>{
    console.log(`${insuranceId}`);
    this._router.navigate(["/insurance-details",insuranceId])
  }


}
