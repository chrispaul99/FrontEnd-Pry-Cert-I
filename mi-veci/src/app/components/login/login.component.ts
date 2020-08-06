import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PersonaService } from 'src/app/services/Persona/persona.service';
import { Router } from '@angular/router';
import { Login } from '../../models/Persona/persona';
import { LoginService } from '../../services/Login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) {
   }

  ngOnInit(): void {
  }
  validacion(){
    let user = new Login();
    user.correo = "test@test.com";
    user.password ="12345";
    this.loginService.login(user).subscribe(
      result => {

        console.log(result);
      }
    );
  }
}
