import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosComercianteRoutingModule } from './pedidos-comerciante-routing.module';
import { PedidosComercianteComponent } from './pedidos-comerciante.component';
import { SharedModule } from '../../../../shared/pipes/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PedidosComercianteComponent],
  imports: [
    CommonModule,
    PedidosComercianteRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PedidosComercianteModule { }
