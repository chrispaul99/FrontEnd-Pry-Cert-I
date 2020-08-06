import { Component, OnInit } from '@angular/core';
import { Email } from 'src/app/models/Email/email';
import { NegocioService } from '../../../services/Negocio/negocio.service';
import { Negocio } from 'src/app/models/Negocio/negocio';
import { ProductoService } from '../../../services/Producto/producto.service';
import { Producto } from 'src/app/models/Producto/producto';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  mainEmail: Email;
  negocios: Negocio[];
  productos: Producto[];

  constructor( private negociosService: NegocioService, private productosService: ProductoService) { }

  ngOnInit(): void {
    this.mainEmail = new Email();
    this.list();
    this.listProductos();
  }
  list(): void {
    this.negociosService.listarNegocios().subscribe(result => {
      this.negocios = result;
    });
  }
  listProductos(): void {
    this.productosService.lista().subscribe(result => {
      this.productos = result;
    });
  }
}
