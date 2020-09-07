import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilComercianteComponent } from './perfil-comerciante.component';

const routes: Routes = [{ path: '', component: PerfilComercianteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilComercianteRoutingModule { }
