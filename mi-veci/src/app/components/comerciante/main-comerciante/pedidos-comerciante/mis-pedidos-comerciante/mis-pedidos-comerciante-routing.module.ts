import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisPedidosComercianteComponent } from './mis-pedidos-comerciante.component';

const routes: Routes = [{ path: '', component: MisPedidosComercianteComponent,children:[
  { path: 'MisPedidos', loadChildren: () => import('./mis-pedidos-comerciante.module').then(m => m.MisPedidosComercianteModule) },
  {path: '', redirectTo: 'MisPedidos', pathMatch: 'full' }
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MisPedidosComercianteRoutingModule { }
