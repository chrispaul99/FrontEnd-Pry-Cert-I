import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NegociosComercianteRoutingModule } from './negocios-comerciante-routing.module';
import { NegociosComercianteComponent } from './negocios-comerciante.component';


@NgModule({
  declarations: [NegociosComercianteComponent],
  imports: [
    CommonModule,
    NegociosComercianteRoutingModule
  ]
})
export class NegociosComercianteModule { }
