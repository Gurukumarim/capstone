import { Address } from "./address"
import { Nominee } from "./nominee"

export class Client {
    constructor(
       public clientName:string,
       public clientId:number,
       public phoneNumber:number,
       public address:Address,
       public nominee:Nominee
    ){}

   
    
}
