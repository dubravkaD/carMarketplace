import {Component, OnInit} from '@angular/core';
import {Car} from "../car-model";
import {ActivatedRoute, Router} from "@angular/router";
import {CarService} from "../car.service";
import {User} from "../../auth/user";
import {UserService} from "../../auth/user.service";

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.page.html',
  styleUrls: ['./car-details.page.scss'],
})
export class CarDetailsPage implements OnInit {

  // @ts-ignore
  car:Car;
  // @ts-ignore
  user:User;
  constructor(private activatedRoute:ActivatedRoute,private router:Router,private carService:CarService, private userService:UserService) {
    /*console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.activatedRoute.paramMap);
    console.log(this.activatedRoute.snapshot.data);
    console.log("url "+this.activatedRoute.url);
    console.log("id "+this.activatedRoute.snapshot.params['id']);*/
    //console.log(this.route.path)
    //console.log(this.router.url)

    this.activatedRoute.paramMap.subscribe(paramMap=>{
      // @ts-ignore
      this.car=this.carService.getCar(paramMap.get('id')!!);
      console.log(this.car.uid)
      // @ts-ignore
      this.user=this.userService.getUser(this.car.uid)!!;
      console.log(this.user)
      console.log(this.car)
    })
  }

  ngOnInit() {

  }

}
