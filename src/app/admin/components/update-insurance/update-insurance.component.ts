import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Insurance } from 'src/app/models/insurance';
import { LifeInsuranceService } from 'src/app/services/life-insurance.service';

@Component({
  selector: 'app-update-insurance',
  templateUrl: './update-insurance.component.html',
  styleUrls: ['./update-insurance.component.scss']
})
export class UpdateInsuranceComponent implements OnInit {
  insurance:Insurance={
    insuranceName: '',
    insuranceId: 0,
    plan: '',
    duration: 0,
    premium: 0,
    sumAssured: 0,
   
  }

  plans:string[]=[]
  insuranceNames:string[]=[]
  insuranceId!: number;
  insuranceObs$!:Observable<Insurance[]>
  

  constructor(private _insuranceService:LifeInsuranceService) { }

  ngOnInit(): void {

    this.insuranceObs$=this._insuranceService.getInsurances();

    this._insuranceService.getByPlans().subscribe({
      next:(data)=>{
        this.plans=data
      }
    })
    this._insuranceService.getByNames().subscribe({
      next:(data)=>{
          this.insuranceNames=data
      }
    })
  }
  show=(insuranceId:number)=>{
    console.log(`${insuranceId}`);
    this.insuranceId=insuranceId
  }


  onSubmit=(updateForm:NgForm)=>{
    console.log(this.insurance)
    this._insuranceService.updateInsurance(this.insurance).subscribe({
      next:(data)=>{
        console.log(data)
      }
    })
  }
}
