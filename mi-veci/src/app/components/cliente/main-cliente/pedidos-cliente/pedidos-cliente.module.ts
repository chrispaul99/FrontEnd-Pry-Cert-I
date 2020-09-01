import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosClienteRoutingModule } from './pedidos-cliente-routing.module';
import { PedidosClienteComponent } from './pedidos-cliente.component';
import { ListadoClienteComponent } from './listado-cliente/listado-cliente.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [PedidosClienteComponent],
  imports: [
    CommonModule,
    PedidosClienteRoutingModule,
    NgxPaginationModule
  ]
})
export class PedidosClienteModule { }
