import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MisNegociosComercianteRoutingModule } from './mis-negocios-comerciante-routing.module';
import { MisNegociosComercianteComponent } from './mis-negocios-comerciante.component';


@NgModule({
  declarations: [MisNegociosComercianteComponent],
  imports: [
    CommonModule,
    MisNegociosComercianteRoutingModule
  ]
})
export class MisNegociosComercianteModule { }
