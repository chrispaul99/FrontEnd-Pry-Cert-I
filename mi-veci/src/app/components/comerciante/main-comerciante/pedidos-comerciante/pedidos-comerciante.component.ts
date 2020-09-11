import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/models/Pedido/pedido';
import { PedidoService } from 'src/app/services/Pedido/pedido.service';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Persona } from 'src/app/models/Persona/persona';
import { Columns, PdfMakeWrapper, QR, Table, Txt } from 'pdfmake-wrapper';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { PersonaService } from '../../../../services/Persona/persona.service';
import { Lista } from '../../../../models/Lista/lista';
PdfMakeWrapper.setFonts(pdfFonts);
@Component({
  selector: 'app-pedidos-comerciante',
  templateUrl: './pedidos-comerciante.component.html',
  styleUrls: ['./pedidos-comerciante.component.css']
})
export class PedidosComercianteComponent implements OnInit {

  misPedidos: Pedido[];
  pedidosFilter: Pedido[];
  pedidoSeleccionado: Pedido;
  elegido:string;
  form: FormGroup;  
  submitted: boolean = false;
  opcionSeleccionada:string = "I";
  tiempo:string = "";
  constructor(private pedidosService: PedidoService,private formBuilder: FormBuilder,private personaService:PersonaService) { }

  ngOnInit(): void {
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor...'
    });
    Swal.showLoading();
    this.elegido = "I";
    this.getPedidos();
    this.form = this.formBuilder.group({
      tiempo: ['', [Validators.required]],
    });
    
  }
  detalles(pedido: Pedido): void{
    this.pedidoSeleccionado = pedido;
    console.log(this.pedidoSeleccionado);
  }
  Confirmar(pedido:Pedido){
    pedido.estado = "P";
    pedido.tiempoOrder = this.DeterminarTiempo();
    this.pedidosService.create(pedido).subscribe(result=>{
      console.log(result);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: "Pedido En Proceso",
        showConfirmButton: false,
        timer: 1500
      });
    });
    window.location.reload();
  }
  Cancelar(pedido:Pedido){
    Swal.fire({
      title: 'Cancelar Pedido',
      text: '¿Esta seguro que desea cancelar el Pedido?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
        if (result.value) {
          Swal.fire({
            allowOutsideClick: false,
            icon: 'info',
            text: 'Espere por favor...'
          });
          Swal.showLoading();
          pedido.estado = "C";
          this.pedidosService.create(pedido).subscribe(result=>{
            console.log(result);
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: "Pedido Cancelado",
              showConfirmButton: false,
              timer: 1500
            });
          })
      }
    });
  }
  DeterminarTiempo():string{
    let timetrans=this.tiempo.split(':');
    let final = "";
    const pedidotime = new Date();
    pedidotime.setHours(parseInt(timetrans[0]),parseInt(timetrans[1]));
    return final = pedidotime.getHours() + ' h' +' - '+ pedidotime.getMinutes()+ ' min';
    
  }
  getPedidosFilter(estado:string){
    this.elegido = estado;
    console.log(estado);
    this.pedidosFilter=this.misPedidos.filter(item=>item.estado == estado);
  }
  getTodos(){
    this.elegido = 'T';
    this.pedidosFilter = this.misPedidos;
  }
  getPedidos(){
    const payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    this.pedidosService.filtrar(payLoad.nameid,payLoad.rol).subscribe(
      result => {
        Swal.close();
        this.misPedidos = result;
      },(error)=>console.log(error),
      ()=>{
        this.pedidosFilter = this.misPedidos.filter(item=>item.estado == this.elegido);
      }
    );
  }
  capturar() {
    if(this.opcionSeleccionada !="T")
      this.getPedidosFilter(this.opcionSeleccionada);
    else
      this.getTodos();
    }
    onSubmit() : void {

      this.submitted = true;
  
      if(this.form.invalid){
        console.error('Error en formulario');
        return;
      }
      this.Confirmar(this.pedidoSeleccionado);
    }
    get f(){
      return this.form.controls;
    }
    AbrirModal(pedido:Pedido){
      this.pedidoSeleccionado = pedido;     
    }
    generarPDF(pedido:Pedido): void {
      let person:Persona = new Persona();
      let hoy = new Date().toLocaleString();
      this.personaService.retrieve(pedido.idCliente).subscribe(result=>{
        person = result;
      },(error)=>console.log(error),
      ()=>{
        const pdf = new PdfMakeWrapper();
        pdf.pageSize('A4');
        pdf.pageOrientation('portrait');
        pdf.header('Mi Veci');
        pdf.add(new Txt('Comprobante').fontSize(24).bold().alignment('center').end);
        pdf.add(pdf.ln(2));
        pdf.add(new Columns([ 'Negocio', ' ', ' ', 'Cliente' ]).fontSize(24).bold().alignment('left').end);
        pdf.add(new Columns([ pedido.Lista.Detalle[0].Producto.Negocio.nombre, ' ', person.nombres+' '+person.apellidos ]).fontSize(16).alignment('justify').end);
        pdf.add(new Columns([ pedido.Lista.Detalle[0].Producto.Negocio.Direccion.referencia, ' ', person.Direccion.referencia ]).fontSize(16).alignment('justify').end);
        pdf.add(new Columns([ pedido.Lista.Detalle[0].Producto.Negocio.Direccion.ciudad, ' ', person.Direccion.ciudad]).fontSize(16).alignment('justify').end);
        pdf.add(new Columns([ '', ' ', person.cedula ]).fontSize(16).italics().alignment('justify').end);
        pdf.add(new Columns([ '', ' ', person.celular ]).fontSize(16).alignment('justify').end);
        pdf.add(new Columns([ '', ' ', person.correo ]).fontSize(16).alignment('justify').end);
        pdf.add(pdf.ln(2));
        pdf.add(new Txt('Generado el '+ hoy).fontSize(20).bold().alignment('left').end);
        pdf.add(pdf.ln(3));
        pdf.add(this.getListado(pedido.Lista));
        pdf.add(pdf.ln(1));
        pdf.add(new Txt('TOTAL A PAGAR     '+pedido.Lista.totalPagar).fontSize(12).bold().alignment('right').end);
        pdf.add(pdf.ln(1));
        pdf.add(new Txt('Gracias por su compra').alignment('center').fontSize(14).end);
        pdf.add(pdf.ln(3));
        pdf.add(new Txt('Código del Pedido').fontSize(26).bold().alignment('center').end);
        pdf.add(pdf.ln(1));
        pdf.add(new QR('DFVD65465').fit(120).alignment('center').end);
        pdf.create().print();
      }
      );
    }
    getListado(lista:Lista) {
      const exs = [];
      let i = 1;
      exs.push(
        [{
          columns: [
            [{
              text: 'Nº',
            },
          ],
          [
          {
            text: 'Producto',
          },],[
          {
            text: 'Cantidad',
          },],[
          {
            text: 'Precio',
          },],[
          {
            text: 'Total',
          },]
          ]
        }]
      );
      lista.Detalle.forEach(detalle => {
        exs.push(
          [{
            columns: [
              [{
                text: i,
              },],[
              {
                text: detalle.Producto.nombre,
              },],[
              {
                text: detalle.cantidad,
              },],[
              {
                text: detalle.Producto.precio,
              },],[
              {
                text: detalle.total,
              },],
            ],
          }]
        );
      });
      return {
        table: {
          widths: ['*'],
          body: [
            ...exs
          ]
        }
      };
    }
}
