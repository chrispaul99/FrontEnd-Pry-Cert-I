import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComercianteRoutingModule } from './main-comerciante-routing.module';
import { MainComercianteComponent } from './main-comerciante.component';


@NgModule({
  declarations: [MainComercianteComponent],
  imports: [
    CommonModule,
    MainComercianteRoutingModule
  ]
})
export class MainComercianteModule { }
