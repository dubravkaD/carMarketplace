import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarsPageRoutingModule } from './cars-routing.module';

import { CarsPage } from './cars.page';
import {CarElementComponent} from "./car-element/car-element.component";
import {CarModalComponent} from "./car-modal/car-modal.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CarsPage, CarElementComponent, CarModalComponent],
})
export class CarsPageModule {}
