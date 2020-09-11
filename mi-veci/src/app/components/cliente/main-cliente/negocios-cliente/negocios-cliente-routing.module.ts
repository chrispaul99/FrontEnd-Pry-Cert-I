import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NegociosClienteComponent } from './negocios-cliente.component';
import { ListNegociosComponent } from '../../../../shared/ComponentShared/list-negocios/list-negocios.component';
import { DetalleNegocioComponent } from '../../../../shared/ComponentShared/detalle-negocio/detalle-negocio.component';

const routes: Routes = [{ path: '', component: NegociosClienteComponent, children:
[
  { path: 'All',component:ListNegociosComponent },
  { path: 'Selected/:id',component:DetalleNegocioComponent },
  {path: '', redirectTo: 'All', pathMatch: 'full' }
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NegociosClienteRoutingModule { }
