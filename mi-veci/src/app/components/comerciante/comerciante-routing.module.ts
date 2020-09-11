import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComercianteComponent } from './comerciante.component';

const routes: Routes = [{ path: '', component: ComercianteComponent,children:[
  { path: 'Main', loadChildren: () => import('./main-comerciante/main-comerciante.module').then(m => m.MainComercianteModule) },
  { path:'', redirectTo:'Main',pathMatch:'full'},
  { path:'**', redirectTo:'Main'},
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComercianteRoutingModule { }
