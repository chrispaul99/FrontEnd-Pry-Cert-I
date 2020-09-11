import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NegociosClienteRoutingModule } from './negocios-cliente-routing.module';
import { NegociosClienteComponent } from './negocios-cliente.component';


@NgModule({
  declarations: [NegociosClienteComponent],
  imports: [
    CommonModule,
    NegociosClienteRoutingModule,
  ]
})
export class NegociosClienteModule { }
