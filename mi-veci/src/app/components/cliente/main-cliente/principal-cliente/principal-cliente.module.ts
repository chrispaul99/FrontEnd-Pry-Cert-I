import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalClienteRoutingModule } from './principal-cliente-routing.module';
import { PrincipalClienteComponent } from './principal-cliente.component';


@NgModule({
  declarations: [PrincipalClienteComponent],
  imports: [
    CommonModule,
    PrincipalClienteRoutingModule
  ]
})
export class PrincipalClienteModule { }
