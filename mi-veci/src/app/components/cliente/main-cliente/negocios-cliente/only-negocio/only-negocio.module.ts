import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnlyNegocioRoutingModule } from './only-negocio-routing.module';
import { OnlyNegocioComponent } from './only-negocio.component';
import { ProductosNegocioComponent } from './productos-negocio/productos-negocio.component';
import { SharedModule } from 'src/app/shared/pipes/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [OnlyNegocioComponent, ProductosNegocioComponent],
  imports: [
    CommonModule,
    OnlyNegocioRoutingModule,
    SharedModule,
    FontAwesomeModule,
    NgxPaginationModule
  ]
})
export class OnlyNegocioModule { }
