import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteMainComponent } from './cliente-main.component';
import { ContenedorNegocioComponent } from './pages/contenedor-negocio/contenedor-negocio.component';
import { ContenedorProductoComponent } from './pages/contenedor-producto/contenedor-producto.component';
import { ResumenProductosComponent } from './pages/resumen-productos/resumen-productos.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

const routes: Routes = [
  { path: '', component: ClienteMainComponent, children: [
    { path: 'contenedor-negocios',      component: ContenedorNegocioComponent },
    { path: 'contenedor-productos/:id',      component: ContenedorProductoComponent },
    { path: 'resumen-productos',      component: ResumenProductosComponent },
    { path: 'resumen-pedidos',      component: ResumenProductosComponent },
    { path: 'perfil',      component: PerfilComponent },
    { path: '', redirectTo: 'contenedor-negocios', pathMatch: 'full'},
    {path: '**', redirectTo: 'contenedor-negocios'}
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteMainRoutingModule { }
