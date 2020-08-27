import { Component, OnInit } from '@angular/core';
import { Login } from '../../models/Persona/persona';
import { LoginService } from '../../services/Login/login.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Login = new Login();
  constructor(private auth: LoginService,private router: Router) {
   }

  ngOnInit(): void {
    this.auth.sesionOpen();
  }
  login( form: NgForm ) {

    if (  form.invalid ) { return; }

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor...'
    });
    Swal.showLoading();


    this.auth.login( this.usuario )
      .subscribe( resp => {
        this.auth.verificarRol();
        Swal.close();
      }, (err) => {

        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Error al autenticar',
          text: "Usuario o contraseña incorrecto"
        });
      });
  }
}
