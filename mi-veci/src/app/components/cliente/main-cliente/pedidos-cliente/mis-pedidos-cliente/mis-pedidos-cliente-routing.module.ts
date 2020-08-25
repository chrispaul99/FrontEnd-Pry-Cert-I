import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisPedidosClienteComponent } from './mis-pedidos-cliente.component';

const routes: Routes = [{ path: '', component: MisPedidosClienteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MisPedidosClienteRoutingModule { }
