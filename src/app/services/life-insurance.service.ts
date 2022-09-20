import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Insurance } from '../models/insurance';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LifeInsuranceService {

  insuranceUrl="http://localhost:8080/lifeinsurance-api/insurances"

  constructor(private _http:HttpClient) { }

  addInsurance=(insurance:Insurance)=>{
    return this._http.post<Insurance>(this.insuranceUrl,insurance)
  }

  updateInsurance=(insurance:Insurance)=>{
    return this._http.put<Insurance>(this.insuranceUrl,insurance)
  }

  deleteInsurance=(planId:number)=>{
    return this._http.delete(this.insuranceUrl+"/"+planId)
  }
  getInsurances=():Observable<Insurance[]>=>{
    return this._http.get<Insurance[]>(this.insuranceUrl)
  }
  getByPlan=(plan:string):Observable<Insurance[]>=>{
    return this._http.get<Insurance[]>(this.insuranceUrl+'/plans/'+plan)
  }
  getById=(insuranceId:number):Observable<Insurance>=>{
    return this._http.get<Insurance>(this.insuranceUrl+'/id/'+insuranceId)
  }
  getByClientName=(clientName:string):Observable<Insurance[]>=>{
    return this._http.get<Insurance[]>(this.insuranceUrl+"/client/"+clientName)
  }

  getByPlans=():Observable<string[]>=>{
    return this._http.get<string[]>(this.insuranceUrl+'/plans')
  }
  getByNames=():Observable<string[]>=>{
    return this._http.get<string[]>(this.insuranceUrl+'/names')
  }

}
