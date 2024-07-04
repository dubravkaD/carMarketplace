import { Component, OnInit } from '@angular/core';
import { CarService} from "./car.service";
import {Router} from "@angular/router";
import {Car} from "./car-model";
import {ModalController} from "@ionic/angular";
import {CarModalComponent} from "./car-modal/car-modal.component";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.page.html',
  styleUrls: ['./cars.page.scss'],
})
export class CarsPage implements OnInit {

  cars:Car[];
  constructor(private carsService:CarService, private modalController:ModalController) {
    this.cars=carsService.cars
  }


  ngOnInit() {
  }

  addCar(){
    this.modalController.create({
      component:CarModalComponent,
      componentProps: {title:'Add Car for Sale'}
    }).then((modal:HTMLIonModalElement)=>{
      modal.present();
      return modal.onDidDismiss();
    }).then((res) =>{
      if(res.role==='add'){
        this.carsService.addCar();
        console.log(res.data.carData);
      }
    });
  }
}
