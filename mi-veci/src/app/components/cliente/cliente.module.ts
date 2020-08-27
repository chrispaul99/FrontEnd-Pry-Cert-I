import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './cliente.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/pipes/shared/shared.module';


@NgModule({
  declarations: [ClienteComponent],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    FontAwesomeModule,
    NgbModule,
    SharedModule
  ]
})
export class ClienteModule { }
