import { Component, OnInit } from '@angular/core';
import {Car} from "../car-model";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {CarService} from "../car.service";

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.page.html',
  styleUrls: ['./car-details.page.scss'],
})
export class CarDetailsPage implements OnInit {

  // @ts-ignore
  car:Car;
  constructor(private activatedRoute:ActivatedRoute,private router:Router,private carService:CarService) {
    console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.activatedRoute.paramMap);
    console.log(this.activatedRoute.snapshot.data);
    console.log("url "+this.activatedRoute.url);
    console.log("id "+this.activatedRoute.snapshot.params['id']);
    //console.log(this.route.path)
    //console.log(this.router.url)

    this.activatedRoute.paramMap.subscribe(paramMap=>{
      // @ts-ignore
      this.car=this.carService.getCar(paramMap.get('id')!!);
      console.log(this.car)
    })
  }

  ngOnInit() {

  }

}
