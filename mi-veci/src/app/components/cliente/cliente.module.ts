import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './cliente.component';
import { NavbarClienteComponent } from './navbar-cliente/navbar-cliente.component';
import { SiderbarClienteComponent } from './siderbar-cliente/siderbar-cliente.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LogoHeaderClienteComponent } from './logo-header-cliente/logo-header-cliente.component';
import { SharedModule } from 'src/app/shared/pipes/shared/shared.module';


@NgModule({
  declarations: [ClienteComponent, NavbarClienteComponent, SiderbarClienteComponent, LogoHeaderClienteComponent],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    FontAwesomeModule,
    NgbModule,
    SharedModule
  ]
})
export class ClienteModule { }
