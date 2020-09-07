import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NegociosComercianteComponent } from './negocios-comerciante.component';

const routes: Routes = [{ path: '', component: NegociosComercianteComponent ,children:[
  { path: 'MisNegocios', loadChildren: () => import('./mis-negocios/mis-negocios.module').then(m => m.MisNegociosModule) },
  { path: 'DetalleNegocio/:id', loadChildren: () => import('./detalle-negocio/detalle-negocio.module').then(m => m.DetalleNegocioModule) },
  {path: '', redirectTo: 'MisNegocios', pathMatch: 'full' }
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NegociosComercianteRoutingModule { }
