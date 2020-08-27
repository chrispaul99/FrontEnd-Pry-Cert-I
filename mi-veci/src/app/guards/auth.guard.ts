import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../services/Login/login.service';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private auth: LoginService,
               private router: Router) {}

  canActivate(next:ActivatedRouteSnapshot): boolean  {

    if ( this.auth.estaAutenticado() ) {
      let roles = next.data['permittedRoles'] as Array<string>;
      console.log(roles);
      if(roles){
        if(this.auth.roleMatch(roles)){
          return true;
        }
        else{
          Swal.fire({
            icon: 'error',
            title: 'Acceso Denegado',
            text: "No esta autorizado"
          });
          this.auth.verificarRol();
          //this.verificarRol(roles[0]);
          return false;
        }
      }
      return true;
    } else {
      console.log("esta prohibido");
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
