import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/Persona/persona';
import { IconDefinition, faHome, faStar, faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jquery';

export interface RouteInfo {
  path: string;
  title: string;
  icon: IconDefinition;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/Cliente/Main/Inicio',     title: 'Menú Principal',         icon: faHome,       class: 'nav-item' },
  { path: '/Cliente/Main/Negocios',          title: 'Negocios',        icon: faStar,      class: 'nav-item' },
  { path: '/Cliente/Main/Pedidos',          title: 'Pedidos',        icon: faBoxOpen,      class: 'nav-item' },
  // { path: '/notifications', title: 'Comprobantes',     icon:'fa fa-file-text',    class: '' },
];
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  persona: Persona;
  public menuItems: any[];
  constructor() { }

  ngOnInit(): void {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.persona = new Persona();
    const payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    this.persona.nombres = payLoad.Nombres;
    this.persona.apellidos = payLoad.Apellidos;
    this.persona.rol = payLoad.rol;
    // Toggle Click Function
    $('#menu-toggle').click((e) => {
      e.preventDefault();
      $('#wrapper').toggleClass('toggled');
    });
  }

}
