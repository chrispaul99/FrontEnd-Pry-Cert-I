import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedidosComercianteComponent } from './pedidos-comerciante.component';

const routes: Routes = [{ path: '', component: PedidosComercianteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidosComercianteRoutingModule { }
