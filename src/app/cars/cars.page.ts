import { Component, OnInit } from '@angular/core';
import { CarService} from "./car.service";
import {Router} from "@angular/router";
import {Car} from "./car-model";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.page.html',
  styleUrls: ['./cars.page.scss'],
})
export class CarsPage implements OnInit {

  cars:Car[];
  constructor(private carsService:CarService) {
    this.cars=carsService.cars
  }


  ngOnInit() {
  }

  addCar(){

  }
}
