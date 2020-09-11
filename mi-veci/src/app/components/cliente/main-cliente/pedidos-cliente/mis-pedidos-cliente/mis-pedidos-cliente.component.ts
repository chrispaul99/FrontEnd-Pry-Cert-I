import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/models/Pedido/pedido';
import { PedidoService } from '../../../../../services/Pedido/pedido.service';

import { Columns, PdfMakeWrapper, QR, Table, Txt } from 'pdfmake-wrapper';
import pdfFonts from 'pdfmake/build/vfs_fonts';
PdfMakeWrapper.setFonts(pdfFonts);

@Component({
  selector: 'app-mis-pedidos-cliente',
  templateUrl: './mis-pedidos-cliente.component.html',
  styleUrls: ['./mis-pedidos-cliente.component.css']
})
export class MisPedidosClienteComponent implements OnInit {

  misPedidos: Pedido[];
  pedidoSeleccionado: Pedido;

  constructor(private pedidosService: PedidoService, ) { }

  ngOnInit(): void {
    const payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    this.pedidosService.filtrar(payLoad.nameid).subscribe(
      result => {
        this.misPedidos = result;
      }
    );
  }

  detalles(pedido: Pedido): void{
    this.pedidoSeleccionado = pedido;
    console.log(this.pedidoSeleccionado);
  }

  generarPDF(): void {
    const pdf = new PdfMakeWrapper();
    pdf.pageSize('A4');
    pdf.pageOrientation('portrait');
    pdf.header('Mi Veci');
    pdf.add(new Txt('Comprobante').fontSize(24).bold().alignment('center').end);
    pdf.add(pdf.ln(2));
    pdf.add(new Columns([ 'Negocio', ' ', ' ', 'Cliente' ]).fontSize(24).bold().alignment('left').end);
    pdf.add(new Columns([ 'Fast Food', ' ', 'Marco Paredes' ]).fontSize(16).alignment('justify').end);
    pdf.add(new Columns([ 'Sede Municipal', ' ', 'Frente al Fast Food' ]).fontSize(16).alignment('justify').end);
    pdf.add(new Columns([ 'Ambato', ' ', 'Ambato' ]).fontSize(16).alignment('justify').end);
    pdf.add(new Columns([ '', ' ', '1977646458' ]).fontSize(16).italics().alignment('justify').end);
    pdf.add(new Columns([ '', ' ', '0987471026' ]).fontSize(16).alignment('justify').end);
    pdf.add(new Columns([ '', ' ', 'marco@marco.com' ]).fontSize(16).alignment('justify').end);
    pdf.add(pdf.ln(2));
    pdf.add(new Txt('Generado el 10/09/2020').fontSize(20).bold().alignment('left').end);
    pdf.add(pdf.ln(3));
    pdf.add(
      new Table([
        [ 'N°', 'Producto', 'Cantidad', 'Precio', 'Total'],
        [ '1', 'Papas Fritas', '1', '$ 1.80', '1.80'],
        [ '2', 'Shawrma Simple', '2', '$ 1.80', '1.80'],
        [ '3', 'Saharma Doble', '6', '$ 1.80', '1.80'],
        [ '4', 'Papi Carne', '4', '$ 1.80', '1.80'],
        [ '5', 'Cerveza Club', '12', '$ 1.80', '1.80'],
        [ '6', 'Extra Papas', '2', '$ 1.80', '1.80'],
        [ '7', 'Extra Salsa Especial', '10', '$ 1.80', '1.80'],
      ]).widths([ 50, 300, 'auto', 60, 'auto']).layout('noBorders').end
    );
    pdf.add(pdf.ln(1));
    pdf.add(new Txt('TOTAL A PAGAR     $ 18.25').fontSize(12).bold().alignment('right').end);
    pdf.add(pdf.ln(1));
    pdf.add(new Txt('Gracias por su compra').alignment('center').fontSize(14).end);
    pdf.add(pdf.ln(3));
    pdf.add(new Txt('Código del Pedido').fontSize(26).bold().alignment('center').end);
    pdf.add(pdf.ln(1));
    pdf.add(new QR('DFVD65465').fit(120).alignment('center').end);
    pdf.create().print();
  }
}
