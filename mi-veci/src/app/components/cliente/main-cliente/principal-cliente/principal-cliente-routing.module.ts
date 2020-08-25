import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipalClienteComponent } from './principal-cliente.component';

const routes: Routes = [{ path: '', component: PrincipalClienteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalClienteRoutingModule { }
