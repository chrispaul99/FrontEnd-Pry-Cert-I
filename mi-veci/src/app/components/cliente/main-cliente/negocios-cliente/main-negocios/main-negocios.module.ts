import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import { MainNegociosRoutingModule } from './main-negocios-routing.module';
import { MainNegociosComponent } from './main-negocios.component';
import { SharedModule } from '../../../../../shared/pipes/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [MainNegociosComponent],
  imports: [
    CommonModule,
    MainNegociosRoutingModule,
    SharedModule,
    FontAwesomeModule,
    NgxPaginationModule
  ]
})
export class MainNegociosModule { }
