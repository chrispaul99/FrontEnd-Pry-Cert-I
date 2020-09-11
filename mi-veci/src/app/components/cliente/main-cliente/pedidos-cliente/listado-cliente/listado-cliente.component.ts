import { Component, OnInit, Input } from '@angular/core';
import { Pedido } from '../../../../../models/Pedido/pedido';
import { PersonaService } from 'src/app/services/Persona/persona.service';
import { Persona } from '../../../../../models/Persona/persona';

@Component({
  selector: 'app-listado-cliente',
  templateUrl: './listado-cliente.component.html',
  styleUrls: ['./listado-cliente.component.css']
})
export class ListadoClienteComponent implements OnInit {

  @Input() pedido:Pedido;
  pageActual: number = 1;
  rol:string = "C"
  cliente:Persona;
  constructor(private personService:PersonaService) { }

  ngOnInit(): void {
    const payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    this.rol = payLoad.rol;
    if(this.rol == "N"){
      this.personService.retrieve(this.pedido.idCliente).subscribe(result=>{
        this.cliente=result;
      });
    }
  }

}
