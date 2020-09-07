import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MisNegociosRoutingModule } from './mis-negocios-routing.module';
import { MisNegociosComponent } from './mis-negocios.component';


@NgModule({
  declarations: [MisNegociosComponent],
  imports: [
    CommonModule,
    MisNegociosRoutingModule
  ]
})
export class MisNegociosModule { }
