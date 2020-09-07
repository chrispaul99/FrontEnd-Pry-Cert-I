import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisNegociosComponent } from './mis-negocios.component';

const routes: Routes = [{ path: '', component: MisNegociosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MisNegociosRoutingModule { }
