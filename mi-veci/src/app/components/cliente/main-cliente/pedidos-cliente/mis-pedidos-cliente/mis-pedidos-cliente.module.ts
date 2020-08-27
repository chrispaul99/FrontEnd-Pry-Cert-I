import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MisPedidosClienteRoutingModule } from './mis-pedidos-cliente-routing.module';
import { MisPedidosClienteComponent } from './mis-pedidos-cliente.component';
import { SharedModule } from '../../../../../shared/pipes/shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [MisPedidosClienteComponent],
  imports: [
    CommonModule,
    MisPedidosClienteRoutingModule,
    SharedModule,
    NgxPaginationModule
  ]
})
export class MisPedidosClienteModule { }
