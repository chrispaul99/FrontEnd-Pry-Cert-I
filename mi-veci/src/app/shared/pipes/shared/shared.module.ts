import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooleanNegocioPipe } from '../boolean-negocio.pipe';
import { ListadoClienteComponent } from '../../../components/cliente/main-cliente/pedidos-cliente/listado-cliente/listado-cliente.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NoImagePipe } from '../no-image.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { ProductosNegocioComponent } from '../../ComponentShared/productos-negocio/productos-negocio.component';
import { NegocioCardComponent } from '../../ComponentShared/negocio-card/negocio-card.component';
import { SearchComponent } from '../../ComponentShared/search/search.component';
import { RolPipe } from '../rol.pipe';
import { EstadoPedidoPipe } from '../estado-pedido.pipe';



@NgModule({
  declarations: [
    FooterComponent,
    SearchComponent,
    ListadoClienteComponent,
    NegocioCardComponent,
    ProductosNegocioComponent,
    BooleanNegocioPipe,
    NoImagePipe,
    RolPipe,
    EstadoPedidoPipe,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NgxPaginationModule,
  ],
  exports: [
    FooterComponent,
    SearchComponent,
    ListadoClienteComponent,
    NegocioCardComponent,
    ProductosNegocioComponent,
    BooleanNegocioPipe,
    NoImagePipe,
    RolPipe,
    EstadoPedidoPipe,
  ]
})
export class SharedModule { }
