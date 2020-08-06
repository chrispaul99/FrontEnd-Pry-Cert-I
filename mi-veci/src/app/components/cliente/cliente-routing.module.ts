import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteComponent } from './cliente.component';
import { PerfilComponent } from './cliente-main/pages/perfil/perfil.component';

const routes: Routes = [
  { path: '', component: ClienteComponent, children: [
    { path: 'MainCliente', loadChildren: () => import('./cliente-main/cliente-main.module').then(m => m.ClienteMainModule) },
    { path: '', redirectTo: 'MainCliente', pathMatch: 'full'},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
