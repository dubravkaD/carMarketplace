import {Component, OnInit, Input} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {FormBuilder, FormControl, FormGroup, NgForm, RequiredValidator, Validators} from "@angular/forms";
import {CarService} from "../car.service";

@Component({
  selector: 'app-car-modal',
  templateUrl: './car-modal.component.html',
  styleUrls: ['./car-modal.component.scss'],
})
export class CarModalComponent implements OnInit {

  public addForm: FormGroup;
  @Input() title:string;

  constructor(private mdlCtrl: ModalController, private carService: CarService, public formBuilder: FormBuilder) {
    this.addForm = this.formBuilder.group({
      model: new FormControl('', [Validators.required]),
      year: new FormControl('', [Validators.required, Validators.maxLength(4), Validators.minLength(4)]),
      price: new FormControl(0, [Validators.required]),
      description: new FormControl('', Validators.required),
      imageURL: new FormControl('', Validators.required)
    });
    this.title='';
  }

  ngOnInit() {
  }

  save() {
    if(this.addForm.valid){
      this.carService.addCar();
      this.mdlCtrl.dismiss(
        {
          carData:
            {
              model:this.addForm.controls['model'].value,
              year: this.addForm.controls['year'].value,
              price: this.addForm.controls['price'].value,
              description: this.addForm.controls['description'].value,
              imageURL:this.addForm.controls['imageURL'].value,
              datePosted: new Date()
            }
        }
        , 'add');
    }
    console.log(this.addForm)
  }

  close() {
    this.mdlCtrl.dismiss(null,'cancel');
  }
}
