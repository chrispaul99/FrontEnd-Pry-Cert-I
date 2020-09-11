import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComercianteRoutingModule } from './comerciante-routing.module';
import { ComercianteComponent } from './comerciante.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/pipes/shared/shared.module';


@NgModule({
  declarations: [ComercianteComponent],
  imports: [
    CommonModule,
    ComercianteRoutingModule,
    FontAwesomeModule,
    NgbModule,
    SharedModule
  ]
})
export class ComercianteModule { }
