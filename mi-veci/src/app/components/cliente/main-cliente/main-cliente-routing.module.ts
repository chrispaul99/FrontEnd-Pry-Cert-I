import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainClienteComponent } from './main-cliente.component';

const routes: Routes = [
  { path: '', component: MainClienteComponent , children:
  [
     // tslint:disable-next-line: max-line-length
  { path: 'Perfil', loadChildren: () => import('./perfil-cliente/perfil-cliente.module').then(m => m.PerfilClienteModule) },
  // tslint:disable-next-line: max-line-length
  { path: 'Negocios', loadChildren: () => import('./negocios-cliente/negocios-cliente.module').then(m => m.NegociosClienteModule) },
  { path: 'Pedidos', loadChildren: () => import('./pedidos-cliente/pedidos-cliente.module').then(m => m.PedidosClienteModule) },
  // tslint:disable-next-line: max-line-length
  { path: 'Inicio', loadChildren: () => import('./principal-cliente/principal-cliente.module').then(m => m.PrincipalClienteModule) },
  {path: '', redirectTo: 'Inicio', pathMatch: 'full' }
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainClienteRoutingModule { }
