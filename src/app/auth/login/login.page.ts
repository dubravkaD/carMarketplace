import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {AlertController} from "@ionic/angular";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private authService: AuthService, private router: Router, private alertController: AlertController) {
  }

  ngOnInit() {
  }

  login(form: NgForm) {
    if (form.valid === true) {
      this.authService.login();
      this.router.navigateByUrl('/cars');
    } else {
      this.alertController.create({
        header: "Invalid input",
        message: "Enter correct email, password(minimal length is 6 characters)",
        buttons: [
          {
            text: "confirm",
            handler: () => {
              this.alertController.dismiss();
            }
          }
        ]
      }).then((alert: HTMLIonAlertElement) => {
          alert.present();
        }
      )
      ;
    }

    console.log(form.valid);
  }
}
