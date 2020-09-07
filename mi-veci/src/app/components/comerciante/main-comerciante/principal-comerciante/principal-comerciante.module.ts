import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalComercianteRoutingModule } from './principal-comerciante-routing.module';
import { PrincipalComercianteComponent } from './principal-comerciante.component';


@NgModule({
  declarations: [PrincipalComercianteComponent],
  imports: [
    CommonModule,
    PrincipalComercianteRoutingModule
  ]
})
export class PrincipalComercianteModule { }
