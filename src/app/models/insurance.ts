import { Client } from "./client";

export class Insurance {
    constructor(
        public insuranceName:string,
        public insuranceId:number,
        public plan:string,
        public duration:number,
        public premium:number,
        public sumAssured:number,
       
    ){}
}
