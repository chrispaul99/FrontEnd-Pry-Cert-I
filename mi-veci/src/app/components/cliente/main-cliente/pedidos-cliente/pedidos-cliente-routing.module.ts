import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedidosClienteComponent } from './pedidos-cliente.component';

const routes: Routes = [{ path: '', component: PedidosClienteComponent, children:[
  { path: 'MiLista/:id', loadChildren: () => import('./lista-cliente/lista-cliente.module').then(m => m.ListaClienteModule) },
  { path: 'MisPedidos', loadChildren: () => import('./mis-pedidos-cliente/mis-pedidos-cliente.module').then(m => m.MisPedidosClienteModule) },
  {path: '', redirectTo: 'MisPedidos', pathMatch: 'full' }
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidosClienteRoutingModule { }
