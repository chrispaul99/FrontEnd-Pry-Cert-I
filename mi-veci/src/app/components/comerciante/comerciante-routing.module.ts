import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComercianteComponent } from './comerciante.component';
import { AuthGuard } from '../../guards/auth.guard';

const routes: Routes = [{ path: '',component: ComercianteComponent,children:[
  { path: 'MainComerciante', loadChildren: () => import('./main-comerciante/main-comerciante.module').then(m => m.MainComercianteModule) },
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComercianteRoutingModule { }
