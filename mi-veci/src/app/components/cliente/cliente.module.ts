import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './cliente.component';
import { ClienteSiderBarComponent } from './cliente-main/cliente-sider-bar/cliente-sider-bar.component';


@NgModule({
  declarations: [ClienteComponent],
  imports: [
    CommonModule,
    ClienteRoutingModule,
  ]
})
export class ClienteModule { }
