import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Negocio } from 'src/app/models/Negocio/negocio';
import { Router } from '@angular/router';
import { NegocioService } from '../../../services/Negocio/negocio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-negocio-card',
  templateUrl: './negocio-card.component.html',
  styleUrls: ['./negocio-card.component.css']
})
export class NegocioCardComponent implements OnInit {

  @Input() negocio: Negocio;
  @Output() eliminado = new EventEmitter<boolean>();
  @Output() negocioSelect = new EventEmitter<Negocio>();

  faCheck = faCheckCircle;
  fatimes = faTimesCircle;
  rol:string;
  constructor(private router: Router,private negocioService:NegocioService) { }

  ngOnInit(): void {
    this.eliminado.emit(false);
  }

  formatoHorario(inicio: string, fin: string): string[]{
    const payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    this.rol = payLoad.rol;
    const Open = inicio.split(':');
    const Close = fin.split(':');
    const horarioOpen = Open[0] + ':' + Open[1];
    const horarioClose = Close[0] + ':' + Close[1];
    const horario = [];
    horario[0] = horarioOpen;
    horario[1] = horarioClose;
    return horario;
  }

  verificarHorario(inicio: string, fin: string): boolean{
    const horaActual = new Date();
    const horarioOpen = inicio.split(':');
    const horarioClose = fin.split(':');
    const Open = new Date();
    const Close = new Date();
    // tslint:disable-next-line: radix
    Open.setHours(parseInt(horarioOpen[0]), parseInt(horarioOpen[1]));
    // tslint:disable-next-line: radix
    Close.setHours(parseInt(horarioClose[0]), parseInt(horarioClose[1]));
    if (Open.getTime() > Close.getTime()){
      // tslint:disable-next-line: radix
      Close.setHours(parseInt(horarioClose[0]) + 24, parseInt(horarioClose[1]));
       // tslint:disable-next-line: radix
      if (parseInt(horarioOpen[0]) > 12){
         // tslint:disable-next-line: radix
        Open.setHours(parseInt(horarioOpen[0]) - 12, parseInt(horarioOpen[1]));
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
    Direccionar(): void{
      const payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
      let rol= payLoad.rol;
      if(rol == "C")
        this.router.navigateByUrl('/Cliente/Main/Negocios/Selected/' + this.negocio.idNegocio);
      else
      this.router.navigateByUrl('/Comerciante/Main/Negocios/' + this.negocio.idNegocio);
    }

    Eliminar():void{
      Swal.fire({
        title: 'Eliminar Negocio',
        text: '¿Esta seguro que desea eliminar '+this.negocio.nombre+' ?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: 'No'
      }).then((result) => {
          if (result.value) {
            this.negocioService.delete(this.negocio.idNegocio).subscribe(result=>{
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: "Negocio Eliminado Correctamente",
                showConfirmButton: false,
                timer: 1500
              });
            });
            this.eliminado.emit(true);
            window.location.reload();
        }
      });
    
    }

    Editar():void{
      this.negocioSelect.emit(this.negocio);
    }
}
