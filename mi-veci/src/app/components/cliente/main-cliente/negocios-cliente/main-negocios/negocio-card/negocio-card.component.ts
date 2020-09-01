import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Negocio } from 'src/app/models/Negocio/negocio';

@Component({
  selector: 'app-negocio-card',
  templateUrl: './negocio-card.component.html',
  styleUrls: ['./negocio-card.component.css']
})
export class NegocioCardComponent implements OnInit {

  @Input() negocio: Negocio;
  faCheck = faCheckCircle;
  fatimes = faTimesCircle;
  constructor() { }

  ngOnInit(): void {
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

  verificarHorario(inicio: string, fin: string): boolean{
    let horaActual = new Date();
    let horarioOpen = inicio.split(':');
    let horarioClose = fin.split(':');
    let Open = new Date();
    let Close = new Date();
    // tslint:disable-next-line: radix
    Open.setHours(parseInt(horarioOpen[0]), parseInt(horarioOpen[1]), parseInt(horarioOpen[2]));
    // tslint:disable-next-line: radix
    Close.setHours(parseInt(horarioClose[0]), parseInt(horarioClose[1]), parseInt(horarioClose[2]));
    if (Open.getTime() > Close.getTime()){
      // tslint:disable-next-line: radix
      Close.setHours(parseInt(horarioClose[0]) + 24, parseInt(horarioClose[1]), parseInt(horarioClose[2]));
       // tslint:disable-next-line: radix
      if (parseInt(horarioOpen[0]) > 12){
         // tslint:disable-next-line: radix
        Open.setHours(parseInt(horarioOpen[0]) - 12, parseInt(horarioOpen[1]), parseInt(horarioOpen[2]));
      }
    }
    return this.ControlHorario(Open.getTime(), Close.getTime(), horaActual.getTime());
  }

  ControlHorario(Inicio: number, Fin: number, actual: number): boolean{
    if (Inicio === Fin){
      return true;
    }
    if ( actual < Fin && actual >= Inicio)
    {
      return true;
    }
    return false;
    }

}
