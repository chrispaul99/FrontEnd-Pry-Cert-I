import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilClienteRoutingModule } from './perfil-cliente-routing.module';
import { PerfilClienteComponent } from './perfil-cliente.component';


@NgModule({
  declarations: [PerfilClienteComponent],
  imports: [
    CommonModule,
    PerfilClienteRoutingModule
  ]
})
export class PerfilClienteModule { }
