import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { LoginService } from '../Login/login.service';

@Injectable()
export class ServiceInterceptor implements HttpInterceptor {

  constructor(private router: Router,private auth:LoginService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  if (localStorage.getItem('token') != null) {
      const clonedReq = req.clone({
          headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'))
      });
      return next.handle(clonedReq).pipe(
          tap(
              succ => { },
              err => {
                  if (err.status == 401){
                    Swal.fire({
                        icon: 'error',
                        title: 'Acceso Denegado',
                        text: "No esta autorizado ha realizar la siguiente petición"
                      });
                      this.auth.sesionOpen();
                  }
                  else if(err.status == 403)
                  console.log("NO AUTORIZADO");
                  //this.router.navigateByUrl('/forbidden');
              }
          )
      )
  }
  else
      return next.handle(req.clone());
}
}