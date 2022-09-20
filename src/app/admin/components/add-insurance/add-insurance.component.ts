import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Insurance } from 'src/app/models/insurance';
import { LifeInsuranceService } from 'src/app/services/life-insurance.service';


@Component({
  selector: 'app-add-insurance',
  templateUrl: './add-insurance.component.html',
  styleUrls: ['./add-insurance.component.scss']
})
export class AddInsuranceComponent implements OnInit {

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
  

  constructor(private _insuranceService:LifeInsuranceService) { }

  ngOnInit(): void {
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

  onSubmit=(addForm:NgForm)=>{
    console.log(this.insurance)
    this._insuranceService.addInsurance(this.insurance).subscribe({
      next:(data)=>{
        console.log(data)
      }
    })
  }

}
