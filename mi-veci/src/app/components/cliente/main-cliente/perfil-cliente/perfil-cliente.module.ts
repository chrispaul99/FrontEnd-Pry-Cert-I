import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilClienteRoutingModule } from './perfil-cliente-routing.module';
import { PerfilClienteComponent } from './perfil-cliente.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PerfilClienteComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PerfilClienteRoutingModule
  ]
})
export class PerfilClienteModule { }
