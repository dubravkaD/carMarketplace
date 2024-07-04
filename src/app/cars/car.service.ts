import { Injectable } from '@angular/core';
import {Car} from "./car-model";

@Injectable({
  providedIn: 'root'
})
export class CarService {
  cars:Car[]=[
    {id:"1",model:"car1",description:"",imageUrl:"assets/pexels-mikebirdy-112460.jpg",uid:"46413rgg5erw4g",datePosted:"25-2-2000"},
    {id:"2",model:"car2",description:"",imageUrl:"",uid:"",datePosted:""},
    {id:"3",model:"car3",description:"",imageUrl:"",uid:"",datePosted:""}
  ];

  constructor() { }

  getCar(id:string){
    return this.cars.find((c) => c.id === id);
  }

  addCar() {
    console.log("saved")
  }
}
