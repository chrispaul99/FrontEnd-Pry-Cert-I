import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleNegocioComponent } from './detalle-negocio.component';

const routes: Routes = [{ path: '', component: DetalleNegocioComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalleNegocioRoutingModule { }
