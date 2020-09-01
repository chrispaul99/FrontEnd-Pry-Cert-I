import { Component, OnInit } from '@angular/core';
import { NegocioService } from 'src/app/services/Negocio/negocio.service';
import { Negocio } from 'src/app/models/Negocio/negocio';
import { faCheck, faCheckCircle, faTimesCircle, faMobile, faPhone } from '@fortawesome/free-solid-svg-icons';
import { DetalleService } from '../../../../../services/Detalle/detalle.service';

@Component({
  selector: 'app-main-negocios',
  templateUrl: './main-negocios.component.html',
  styleUrls: ['./main-negocios.component.css']
})
export class MainNegociosComponent implements OnInit {

  negocios: Negocio[];
  open = false;
  famobile = faPhone;
  faCheck = faCheckCircle;
  fatimes = faTimesCircle;
  pageActual: number = 1;
  loading: boolean;
  constructor(private negocioService: NegocioService,private detalleService: DetalleService) { }

  ngOnInit(): void {
    this.detalleService.setListaDetalles([]);
    this.list();
  }
  list(): void {
    this.loading = true;
    this.negocioService.listarNegocios().subscribe(result => {
      this.negocios = result;
    },
    (error)=>console.log(error),
    ()=>{
      this.loading = false;
    } 
    );
  }
  verificarHorario(inicio: string, fin: string): boolean{
    let horaActual = new Date();
    let horarioOpen = inicio.split(':');
    let horarioClose = fin.split(':');
    let Open = new Date();
    let Close = new Date();
    // tslint:disable-next-line: radix
    Open.setHours(parseInt(horarioOpen[0]),parseInt(horarioOpen[1]), parseInt(horarioOpen[2]));
    // tslint:disable-next-line: radix
    Close.setHours(parseInt(horarioClose[0]), parseInt(horarioClose[1]),parseInt(horarioClose[2]));
    if(Open.getTime() > Close.getTime()){
      // tslint:disable-next-line: radix
      Close.setHours(parseInt(horarioClose[0]) + 24, parseInt(horarioClose[1]),parseInt(horarioClose[2]));
       // tslint:disable-next-line: radix
      if(parseInt(horarioOpen[0]) > 12){
         // tslint:disable-next-line: radix
        Open.setHours(parseInt(horarioOpen[0]) - 12, parseInt(horarioOpen[1]), parseInt(horarioOpen[2]));
      }
    }
    return this.ControlHorario(Open.getTime(), Close.getTime(), horaActual.getTime());
  }
  ControlHorario(Inicio: number, Fin: number, actual: number): boolean{
  if(Inicio === Fin){
    return true;
  }
  if( actual < Fin && actual >= Inicio)
  {
    return true;
  }
  return false;
  }
  formatoHorario(inicio: string, fin: string): string[]{
    let Open = inicio.split(':');
    let Close = fin.split(':');
    let horarioOpen = Open[0] + ':' + Open[1];
    let horarioClose = Close[0] + ':' + Close[1];
    let horario = [];
    horario[0] = horarioOpen;
    horario[1] = horarioClose;
    return horario;
  }

}
