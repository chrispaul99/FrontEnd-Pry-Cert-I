import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisPedidosComercianteComponent } from './mis-pedidos-comerciante.component';

const routes: Routes = [{ path: '', component: MisPedidosComercianteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MisPedidosComercianteRoutingModule { }
