import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Insurance } from 'src/app/models/insurance';
import { LifeInsuranceService } from 'src/app/services/life-insurance.service';

@Component({
  selector: 'app-delete-insurance',
  templateUrl: './delete-insurance.component.html',
  styleUrls: ['./delete-insurance.component.scss']
})
export class DeleteInsuranceComponent implements OnInit {
  insurance:Insurance={
    insuranceName: '',
    insuranceId: 0,
    plan: '',
    duration: 0,
    premium: 0,
    sumAssured: 0,
    
  }

  constructor(private _insuranceService:LifeInsuranceService) { }

  ngOnInit(): void {
  }

  onDelete=(deleteForm:NgForm)=>{
    console.log(this.insurance)
    this._insuranceService.deleteInsurance(this.insurance.insuranceId).subscribe({
      next:(data)=>{
        console.log(data)
      }
    })
  }

}
