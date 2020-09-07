import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosComercianteRoutingModule } from './pedidos-comerciante-routing.module';
import { PedidosComercianteComponent } from './pedidos-comerciante.component';


@NgModule({
  declarations: [PedidosComercianteComponent],
  imports: [
    CommonModule,
    PedidosComercianteRoutingModule
  ]
})
export class PedidosComercianteModule { }
