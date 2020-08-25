import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaClienteRoutingModule } from './lista-cliente-routing.module';
import { ListaClienteComponent } from './lista-cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../../../../../shared/pipes/shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [ListaClienteComponent],
  imports: [
    CommonModule,
    ListaClienteRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    SharedModule,
    NgxPaginationModule
  ]
})
export class ListaClienteModule { }
