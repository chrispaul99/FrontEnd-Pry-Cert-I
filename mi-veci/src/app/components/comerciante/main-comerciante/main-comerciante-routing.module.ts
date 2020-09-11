import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComercianteComponent } from './main-comerciante.component';
import { PrincipalComercianteComponent } from './principal-comerciante/principal-comerciante.component';

const routes: Routes = [{ path: '', component: MainComercianteComponent,children:[
  { path: 'Pedidos', loadChildren: () => import('./pedidos-comerciante/pedidos-comerciante.module').then(m => m.PedidosComercianteModule) },
  { path: 'Perfil', loadChildren: () => import('./perfil-comerciante/perfil-comerciante.module').then(m => m.PerfilComercianteModule) },
  { path: 'Negocios', loadChildren: () => import('./negocios-comerciante/negocios-comerciante.module').then(m => m.NegociosComercianteModule) },
  { path: 'Principal', component:PrincipalComercianteComponent },
  { path:'', redirectTo:'Principal',pathMatch:'full'},
  { path:'**', redirectTo:'Principal'},
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainComercianteRoutingModule { }
