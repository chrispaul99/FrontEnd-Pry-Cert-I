import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  { path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./components/register/register.module').then(m => m.RegisterModule) },
  { path: 'Administrador', loadChildren: () => import('./components/administrador/administrador.module').then(m => m.AdministradorModule), canActivate: [ AuthGuard ], data:{permittedRoles:["A"]} },
  { path: 'Comerciante', loadChildren: () => import('./components/comerciante/comerciante.module').then(m => m.ComercianteModule) , canActivate: [ AuthGuard ], data:{permittedRoles:["N"]}},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'Cliente', loadChildren: () => import('./components/cliente/cliente.module').then(m => m.ClienteModule), canActivate: [ AuthGuard ], data:{permittedRoles:["C"]} },
  { path: 'MainComerciante', loadChildren: () => import('./components/comerciante/main-comerciante/main-comerciante.module').then(m => m.MainComercianteModule) },
  { path: 'MisNegociosComerciante', loadChildren: () => import('./components/comerciante/main-comerciante/mis-negocios-comerciante/mis-negocios-comerciante.module').then(m => m.MisNegociosComercianteModule) },
  { path: 'NegociosComerciante', loadChildren: () => import('./components/comerciante/main-comerciante/negocios-comerciante/negocios-comerciante.module').then(m => m.NegociosComercianteModule) },
  { path: 'MisNegocios', loadChildren: () => import('./components/comerciante/main-comerciante/negocios-comerciante/mis-negocios/mis-negocios.module').then(m => m.MisNegociosModule) },
  { path: 'DetalleNegocio', loadChildren: () => import('./components/comerciante/main-comerciante/negocios-comerciante/customers/customers.module').then(m => m.CustomersModule) },
  { path: 'DetalleNegocio', loadChildren: () => import('./components/comerciante/main-comerciante/negocios-comerciante/detalle-negocio/detalle-negocio.module').then(m => m.DetalleNegocioModule) },
  { path: 'perfilComerciante', loadChildren: () => import('./components/comerciante/main-comerciante/perfil-comerciante/perfil-comerciante.module').then(m => m.PerfilComercianteModule) },
  { path: 'pedidosComerciante', loadChildren: () => import('./components/comerciante/main-comerciante/pedidos-comerciante/pedidos-comerciante.module').then(m => m.PedidosComercianteModule) },
  { path: 'PrincipalComerciante', loadChildren: () => import('./components/comerciante/main-comerciante/principal-comerciante/principal-comerciante.module').then(m => m.PrincipalComercianteModule) },
  { path: 'MisPedidosComerciante', loadChildren: () => import('./components/comerciante/main-comerciante/pedidos-comerciante/mis-pedidos-comerciante/mis-pedidos-comerciante.module').then(m => m.MisPedidosComercianteModule) }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
