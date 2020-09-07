import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisNegociosComercianteComponent } from './mis-negocios-comerciante.component';

const routes: Routes = [{ path: '', component: MisNegociosComercianteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MisNegociosComercianteRoutingModule { }
