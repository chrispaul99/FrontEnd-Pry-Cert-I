import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteComponent } from './cliente.component';

const routes: Routes = [{ path: '', component: ClienteComponent, children: [
  { path: 'Main', loadChildren: () => import('./main-cliente/main-cliente.module').then(m => m.MainClienteModule) },
  { path: '', redirectTo: 'Main', pathMatch: 'full'},
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
