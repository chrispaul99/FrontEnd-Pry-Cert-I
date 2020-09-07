import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalleNegocioRoutingModule } from './detalle-negocio-routing.module';
import { DetalleNegocioComponent } from './detalle-negocio.component';
import { ProductoComercianteComponent } from './producto-comerciante/producto-comerciante.component';


@NgModule({
  declarations: [DetalleNegocioComponent, ProductoComercianteComponent],
  imports: [
    CommonModule,
    DetalleNegocioRoutingModule
  ]
})
export class DetalleNegocioModule { }
