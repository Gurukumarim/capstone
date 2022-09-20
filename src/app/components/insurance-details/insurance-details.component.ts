import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/models/client';
import { Insurance } from 'src/app/models/insurance';
import { ClientService } from 'src/app/services/client.service';
import { LifeInsuranceService } from 'src/app/services/life-insurance.service';

@Component({
  selector: 'app-insurance-details',
  templateUrl: './insurance-details.component.html',
  styleUrls: ['./insurance-details.component.scss']
})
export class InsuranceDetailsComponent implements OnInit {
  insuranceId:number=0
  insurance!:Insurance;
  client!:Client[];
  
    constructor(private _insuranceService:LifeInsuranceService,private _clientService:ClientService,
                private _activatedRoute:ActivatedRoute) { }
  
    ngOnInit(): void {
      this._activatedRoute.paramMap.subscribe((map)=>{
  
        let pid=map.get("insuranceId");
        if(pid)
          this.insuranceId=parseInt(pid);
        });
     
      this._insuranceService.getById(this.insuranceId).subscribe({
        next:(data)=>{
          this.insurance=data;
        }
        
  
      })
      this._clientService.getClient().subscribe({
        next:(data)=>{
          this.client=data;
        }
      })
    }

}
