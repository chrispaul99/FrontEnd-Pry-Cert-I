import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComercianteComponent } from './comerciante.component';

const routes: Routes = [{ path: '', component: ComercianteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComercianteRoutingModule { }
