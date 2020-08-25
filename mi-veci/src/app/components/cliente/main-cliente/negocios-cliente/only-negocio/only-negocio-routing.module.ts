import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnlyNegocioComponent } from './only-negocio.component';

const routes: Routes = [{ path: '', component: OnlyNegocioComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnlyNegocioRoutingModule { }
