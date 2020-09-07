import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NegociosComercianteComponent } from './negocios-comerciante.component';

const routes: Routes = [{ path: '', component: NegociosComercianteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NegociosComercianteRoutingModule { }
