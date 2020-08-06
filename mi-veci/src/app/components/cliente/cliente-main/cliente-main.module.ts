import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteMainRoutingModule } from './cliente-main-routing.module';
import { ClienteMainComponent } from './cliente-main.component';
import { ContenedorNegocioComponent } from './pages/contenedor-negocio/contenedor-negocio.component';
import { ContenedorProductoComponent } from './pages/contenedor-producto/contenedor-producto.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ResumenPedidosComponent } from './pages/resumen-pedidos/resumen-pedidos.component';
import { ResumenProductosComponent } from './pages/resumen-productos/resumen-productos.component';
import { ListaPedidosComponent } from './components/lista-pedidos/lista-pedidos.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { TarjetaEnviarCancelarComponent } from './components/tarjeta-enviar-cancelar/tarjeta-enviar-cancelar.component';
import { TarjetaNegocioComponent } from './components/tarjeta-negocio/tarjeta-negocio.component';
import { TarjetaProductoComponent } from './components/tarjeta-producto/tarjeta-producto.component';
import { TarjetaTotalComponent } from './components/tarjeta-total/tarjeta-total.component';
import { TarjetaVerSigComponent } from './components/tarjeta-ver-sig/tarjeta-ver-sig.component';
import { DeliveryReservaPipe } from './shared/pipes/delivery-reserva.pipe';
import { EstadoPipe } from './shared/pipes/estado.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ClienteNavBarComponent } from './cliente-nav-bar/cliente-nav-bar.component';
import { ClienteFooterComponent } from './cliente-footer/cliente-footer.component';
import { ClienteSiderBarComponent } from './cliente-sider-bar/cliente-sider-bar.component';


@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [
    ClienteMainComponent, ContenedorNegocioComponent, 
    ContenedorProductoComponent, PerfilComponent, 
    ResumenPedidosComponent, ResumenProductosComponent,
     ListaPedidosComponent, ListaProductosComponent, 
     TarjetaEnviarCancelarComponent, TarjetaNegocioComponent, 
     TarjetaProductoComponent, TarjetaTotalComponent, 
     TarjetaVerSigComponent, DeliveryReservaPipe,
      EstadoPipe,
      ClienteNavBarComponent,
      ClienteFooterComponent,
      ClienteSiderBarComponent],
  imports: [
    CommonModule,
    ClienteMainRoutingModule,
    FormsModule,
    NgbModule
  ]
})
export class ClienteMainModule { }
