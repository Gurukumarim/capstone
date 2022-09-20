import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  ClientUrl="http://localhost:8080/client"

  constructor(private _http:HttpClient) { }

  getClient=():Observable<Client[]>=>{
    return this._http.get<Client[]>(this.ClientUrl)
  }


}
