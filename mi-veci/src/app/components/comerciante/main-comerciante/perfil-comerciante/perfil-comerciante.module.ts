import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilComercianteRoutingModule } from './perfil-comerciante-routing.module';
import { PerfilComercianteComponent } from './perfil-comerciante.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PerfilComercianteComponent],
  imports: [
    CommonModule,
    PerfilComercianteRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PerfilComercianteModule { }
