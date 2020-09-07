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
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
