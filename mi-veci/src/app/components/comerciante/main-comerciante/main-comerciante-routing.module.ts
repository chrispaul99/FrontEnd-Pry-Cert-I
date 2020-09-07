import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComercianteComponent } from './main-comerciante.component';

const routes: Routes = [{ path: '', component: MainComercianteComponent, children:[
  { path: 'Negocios', loadChildren: () => import('./negocios-comerciante/negocios-comerciante.module').then(m => m.NegociosComercianteModule) },
  { path: 'Perfil', loadChildren: () => import('./perfil-comerciante/perfil-comerciante.module').then(m => m.PerfilComercianteModule) },
  { path: 'Pedidos', loadChildren: () => import('./pedidos-comerciante/pedidos-comerciante.module').then(m => m.PedidosComercianteModule) },
  { path: 'Principal', loadChildren: () => import('./principal-comerciante/principal-comerciante.module').then(m => m.PrincipalComercianteModule) },

  {path: '', redirectTo: 'Principal', pathMatch: 'full' }
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainComercianteRoutingModule { }
