import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilComercianteRoutingModule } from './perfil-comerciante-routing.module';
import { PerfilComercianteComponent } from './perfil-comerciante.component';


@NgModule({
  declarations: [PerfilComercianteComponent],
  imports: [
    CommonModule,
    PerfilComercianteRoutingModule
  ]
})
export class PerfilComercianteModule { }
