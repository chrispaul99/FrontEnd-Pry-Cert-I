import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NegociosClienteComponent } from './negocios-cliente.component';

const routes: Routes = [{ path: '', component: NegociosClienteComponent, children:
[
  { path: 'All', loadChildren: () => import('./main-negocios/main-negocios.module').then(m => m.MainNegociosModule) },
  { path: 'Selected/:id', loadChildren: () => import('./only-negocio/only-negocio.module').then(m => m.OnlyNegocioModule) },
  {path: '', redirectTo: 'All', pathMatch: 'full' }
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NegociosClienteRoutingModule { }
