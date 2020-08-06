import { Component, OnInit } from '@angular/core';
import { Negocio } from 'src/app/models/Negocio/negocio';
import { NegocioService } from 'src/app/services/Negocio/negocio.service';

@Component({
  selector: 'app-contenedor-negocio',
  templateUrl: './contenedor-negocio.component.html',
  styleUrls: ['./contenedor-negocio.component.scss']
})
export class ContenedorNegocioComponent implements OnInit {
  negocios: Negocio[];

  // tslint:disable-next-line: typedef-whitespace
  // tslint:disable-next-line: variable-name
  constructor(private _negocioService: NegocioService) { }

  ngOnInit(): void {
    this.list();
  }

  list(): void {
    this._negocioService.listarNegocios().subscribe(result => {
      this.negocios = result;
    });
  }

}
