import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MisPedidosComercianteRoutingModule } from './mis-pedidos-comerciante-routing.module';
import { MisPedidosComercianteComponent } from './mis-pedidos-comerciante.component';


@NgModule({
  declarations: [MisPedidosComercianteComponent],
  imports: [
    CommonModule,
    MisPedidosComercianteRoutingModule
  ]
})
export class MisPedidosComercianteModule { }
