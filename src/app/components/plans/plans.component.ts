import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LifeInsuranceService } from 'src/app/services/life-insurance.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {

  plans:string=''

  constructor(private _insuranceService:LifeInsuranceService,
              private _router:Router,
              private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  // this._activatedRoute.paramMap.subscribe(map=>{
  //   let plan=map.get("plan");
  //   if(plan)
  //     this.plan=plan;

  // this._insuranceService.getByPlan(this.plans).subscribe({
  //   next:(data)=>{
  //     console.log(`${data}`);
  //     this.insurance=data;
  //   }
  // })

  // })

}
