import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Car} from "../car-model";

@Component({
  selector: 'app-car-element',
  templateUrl: './car-element.component.html',
  styleUrls: ['./car-element.component.scss'],
})
export class CarElementComponent  implements OnInit {

  @Input() car:Car={id:"",model:"",description:"",imageUrl:"",uid:"",datePosted:""};
  constructor() { }

  ngOnInit() {

  }

  seeMore() {
    //this.router.navigateByUrl('/reservations' + paramValue);
  }

  getCar(){return this.car}
}
