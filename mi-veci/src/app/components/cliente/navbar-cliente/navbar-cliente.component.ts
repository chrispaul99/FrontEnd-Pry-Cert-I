import { Component, OnInit } from '@angular/core';
import { faBars, faEnvelope, faBell, faUserPlus, faPhone, faPhoneSlash, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar-cliente',
  templateUrl: './navbar-cliente.component.html',
  styleUrls: ['./navbar-cliente.component.css']
})
export class NavbarClienteComponent implements OnInit {
  faMenu = faBars;
  faCorreo = faEnvelope;
  faNotificacion = faBell;
  faUser = faUserPlus;
  faphone = faPhoneSlash;
  faoption = faEllipsisV;
  constructor() { }

  ngOnInit(): void {
  }

}
