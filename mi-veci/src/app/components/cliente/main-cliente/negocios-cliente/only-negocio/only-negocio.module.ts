import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlyNegocioRoutingModule } from './only-negocio-routing.module';
import { OnlyNegocioComponent } from './only-negocio.component';
import { SharedModule } from 'src/app/shared/pipes/shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [OnlyNegocioComponent],
  imports: [
    CommonModule,
    OnlyNegocioRoutingModule,
    SharedModule,
    NgxPaginationModule
  ]
})
export class OnlyNegocioModule { }
