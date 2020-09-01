import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../../components/footer/footer.component';
import { SearchComponent } from '../../../components/search/search.component';
import { ProductosNegocioComponent } from '../../../components/cliente/main-cliente/negocios-cliente/only-negocio/productos-negocio/productos-negocio.component';
import { BooleanNegocioPipe } from '../boolean-negocio.pipe';
import { NoImagePipe } from '../no-image.pipe';
import { ListadoClienteComponent } from '../../../components/cliente/main-cliente/pedidos-cliente/listado-cliente/listado-cliente.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NegocioCardComponent } from '../../../components/cliente/main-cliente/negocios-cliente/main-negocios/negocio-card/negocio-card.component';


@NgModule({
  declarations: [
    FooterComponent,
    SearchComponent,
    ListadoClienteComponent,
    NegocioCardComponent,
    ProductosNegocioComponent,
    BooleanNegocioPipe,
    NoImagePipe
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NgxPaginationModule,
  ],
  exports: [
    FooterComponent,
    SearchComponent,
    NegocioCardComponent,
    ListadoClienteComponent,
    ProductosNegocioComponent,
    BooleanNegocioPipe,
    NoImagePipe
  ]
})
export class SharedModule { }
