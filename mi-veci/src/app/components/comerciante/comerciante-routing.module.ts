import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComercianteComponent } from './comerciante.component';
import { AuthGuard } from '../../guards/auth.guard';

const routes: Routes = [{ path: '',component: ComercianteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComercianteRoutingModule { }
