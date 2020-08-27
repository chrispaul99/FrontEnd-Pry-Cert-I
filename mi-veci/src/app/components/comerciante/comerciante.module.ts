import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComercianteRoutingModule } from './comerciante-routing.module';
import { ComercianteComponent } from './comerciante.component';


@NgModule({
  declarations: [ComercianteComponent],
  imports: [
    CommonModule,
    ComercianteRoutingModule
  ]
})
export class ComercianteModule { }
