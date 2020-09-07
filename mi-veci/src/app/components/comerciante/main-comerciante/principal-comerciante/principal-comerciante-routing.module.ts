import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipalComercianteComponent } from './principal-comerciante.component';

const routes: Routes = [{ path: '', component: PrincipalComercianteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalComercianteRoutingModule { }
