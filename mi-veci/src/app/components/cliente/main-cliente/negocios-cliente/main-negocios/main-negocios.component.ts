import { Component, OnInit } from '@angular/core';
import { NegocioService } from 'src/app/services/Negocio/negocio.service';
import { Negocio } from 'src/app/models/Negocio/negocio';
import { faCheckCircle, faTimesCircle, faPhone } from '@fortawesome/free-solid-svg-icons';
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
  pageActual = 1;
  loading: boolean;
  mostrarTarjetas = true;
  constructor(private negocioService: NegocioService, private detalleService: DetalleService) { }

  ngOnInit(): void {
    this.detalleService.setListaDetalles([]);
    this.list();
  }
  list(): void {
    this.loading = true;
    this.negocioService.listarNegocios().subscribe(result => {
      this.negocios = result;
    },
    (error) => console.log(error),
    () => {
      this.loading = false;
    }
    );
  }

  Ocultar($event): void{
    if ($event) {
      this.mostrarTarjetas = false;
    }
    else{
      this.mostrarTarjetas = true;
    }
  }
}
