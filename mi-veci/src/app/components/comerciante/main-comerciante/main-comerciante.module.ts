import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComercianteRoutingModule } from './main-comerciante-routing.module';
import { MainComercianteComponent } from './main-comerciante.component';
import { PrincipalComercianteComponent } from './principal-comerciante/principal-comerciante.component';
import { SharedModule } from '../../../shared/pipes/shared/shared.module';


@NgModule({
  declarations: [MainComercianteComponent,PrincipalComercianteComponent],
  imports: [
    CommonModule,
    MainComercianteRoutingModule,
    SharedModule
  ]
})
export class MainComercianteModule { }
