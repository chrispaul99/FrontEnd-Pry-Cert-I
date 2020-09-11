import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainClienteRoutingModule } from './main-cliente-routing.module';
import { MainClienteComponent } from './main-cliente.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from 'src/app/shared/pipes/shared/shared.module';
import { PrincipalClienteComponent } from './principal-cliente/principal-cliente.component';


@NgModule({
  declarations: [MainClienteComponent,PrincipalClienteComponent],
  imports: [
    CommonModule,
    MainClienteRoutingModule,
    FontAwesomeModule,
    SharedModule,
  ]
})
export class MainClienteModule { }
