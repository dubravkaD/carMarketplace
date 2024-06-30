import { Injectable } from '@angular/core';

export interface Car {
  id:string;
  model:string;
  description:string;
  imageUrl:string;
  uid: string;
  datePosted: string;
}

@Injectable({
  providedIn: 'root'
})
export class CarService {
  cars:Car[]=[
    {id:"1",model:"car1",description:"",imageUrl:"",uid:"",datePosted:""},
    {id:"2",model:"car2",description:"",imageUrl:"",uid:"",datePosted:""},
    {id:"3",model:"car3",description:"",imageUrl:"",uid:"",datePosted:""}
  ];

  constructor() { }

  getCar(id:string){
    return this.cars.find((c) => c.id === id);
  }
}
