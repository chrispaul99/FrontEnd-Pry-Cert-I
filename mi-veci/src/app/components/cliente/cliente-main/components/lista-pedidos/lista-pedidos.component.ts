import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../../../../services/Pedido/pedido.service';
import { FormaPagoService } from '../../../../../services/FormaPago/forma-pago.service';
import { ListaService } from 'src/app/services/Lista/lista.service';
interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

interface PedidoData {
  nombre: string;
  formaPago: string;
  total: number;
}
@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.scss']
})
export class ListaPedidosComponent implements OnInit {
  public tableData1: TableData;
  public pagSig: any[];
  private pedidoData: PedidoData = {
    nombre: 'Pendiente de llenar',
    formaPago: undefined,
    total: 10.45,
  };
  listaPedidos: any[] = [];
  private pedidosFiltrados: any;
  private totalLista: number;
  private formaPago: string;

  constructor(
    private _pedidoService: PedidoService,
    private _formaPagoService: FormaPagoService,
    private _listaService: ListaService
  )
  { }

  ngOnInit(): void {
  // this.pagSig = ROUTES.filter(x => x.path.includes('/comprobante'));
  this.cargarData();
  this.tableData1 = {
    headerRow: [ 'Negocio', 'Forma de Pago'],
    dataRows: [
        ['Don Chcicho', 'Efectivo', '$$$$'],
        ['Don Chcicho', 'Efectivo', '$$$$'],
        ['Don Chcicho', 'Efectivo', '$$$$'],
        ['Don Chcicho', 'Efectivo', '$$$$'],
        ['Don Chcicho', 'Efectivo', '$$$$'],
        ['Don Chcicho', 'Efectivo', '$$$$']
    ]
  };
  }

  cargarData(): void{
    this._pedidoService.filtrar(3).subscribe(result => {    // Obtener idCliente del token
      this.pedidosFiltrados = result;
    },
    err => console.log(err),
    () => {
      console.log(this.pedidosFiltrados);
      /* Recorrer los pedidos que llegaron de la BDD */
      for (const key in this.pedidosFiltrados) {
        if (Object.prototype.hasOwnProperty.call(this.pedidosFiltrados, key)) {
          const element = this.pedidosFiltrados[key];
          /* Buscar el tipo de forma de pago  */
          this._formaPagoService.buscar(element.idFormaPago).subscribe(resultFP => {
            this.formaPago = resultFP.tipo;
          },
          err => console.log(err),
          () => {
            this.pedidoData.formaPago = this.formaPago;
             /* Buscar el total de la lista  */
            this._listaService.recuperarTotal(element.idLista).subscribe(resultLS => {
              this.totalLista = resultLS.totalPagar;
            },
            err => console.log(err),
            () => {
              this.pedidoData.total = this.totalLista;
              console.log(this.pedidoData);
              /* Arreglar el push */
              this.listaPedidos.push(this.pedidoData);
              console.log(this.listaPedidos);
            });
          });
        }
      }
      /* En el futuro añadir funcion para cargar pedidos a medida que se baja la pantalla */
    });
  }
}
