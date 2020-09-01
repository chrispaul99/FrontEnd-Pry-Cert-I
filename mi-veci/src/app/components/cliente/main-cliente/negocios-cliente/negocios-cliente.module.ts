import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NegociosClienteRoutingModule } from './negocios-cliente-routing.module';
import { NegociosClienteComponent } from './negocios-cliente.component';
import { SharedModule } from 'src/app/shared/pipes/shared/shared.module';


@NgModule({
  declarations: [NegociosClienteComponent],
  imports: [
    CommonModule,
    NegociosClienteRoutingModule,
    SharedModule
  ]
})
export class NegociosClienteModule { }
