import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComercianteComponent } from './main-comerciante.component';

const routes: Routes = [{ path: '', component: MainComercianteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainComercianteRoutingModule { }
