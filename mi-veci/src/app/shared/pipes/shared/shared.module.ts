import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../../components/footer/footer.component';
import { SearchComponent } from '../../../components/search/search.component';
import { BooleanNegocioPipe } from '../boolean-negocio.pipe';
import { ListadoClienteComponent } from '../../../components/cliente/main-cliente/pedidos-cliente/listado-cliente/listado-cliente.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [FooterComponent, SearchComponent,ListadoClienteComponent, BooleanNegocioPipe],
  imports: [
    CommonModule,
    NgxPaginationModule
  ],
  exports:[FooterComponent, SearchComponent,ListadoClienteComponent, BooleanNegocioPipe]
})
export class SharedModule { }
