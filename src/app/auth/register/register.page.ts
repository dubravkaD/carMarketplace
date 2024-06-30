import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public registerForm:FormGroup;
  constructor(public formBuilder:FormBuilder, private authService:AuthService, private router:Router, private alertController:AlertController) {
    this.registerForm = this.formBuilder.group({
      password: new FormControl('', [Validators.required,Validators.minLength(6)]),
      email: new FormControl('', [Validators.required,Validators.email]),
      username: new FormControl('', [Validators.required,Validators.maxLength(30)]),
      contact: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }

  register(){
    if(!this.registerForm.valid){
      this.alertController.create({
        header:"Invalid input",
        message:"Enter correct email, password(minimal length is 6 characters) and user name(maximal length is 30 characters)",
        buttons:[
          {
            text:"confirm",
            handler:()=>{
              this.alertController.dismiss();
            }
          }
        ],
      });
    }else {
      this.alertController.create({
        header:"Register",
        message:"Do you want to register",
        buttons:[
          {
            text:"Register",
            handler:()=>{
              this.authService.register();
              this.router.navigateByUrl('/cars');
            }
          }
        ],
      }).then((alert:HTMLIonAlertElement)=>{
        alert.present();
      });
      console.log(this.registerForm.value);
    }

  }
}
