import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NegociosComercianteComponent } from './negocios-comerciante.component';
import { ListNegociosComponent } from 'src/app/shared/ComponentShared/list-negocios/list-negocios.component';
import { DetalleNegocioComponent } from 'src/app/shared/ComponentShared/detalle-negocio/detalle-negocio.component';

const routes: Routes = [{ path: '', component: NegociosComercianteComponent,children:[
  { path: '',component:ListNegociosComponent },
  { path: ':id',component:DetalleNegocioComponent },
  {path: '', redirectTo: '', pathMatch: 'full' }
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NegociosComercianteRoutingModule { }
