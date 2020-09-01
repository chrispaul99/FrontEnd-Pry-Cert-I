import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/Login/login.service';

@Component({
  selector: 'app-comerciante',
  templateUrl: './comerciante.component.html',
  styleUrls: ['./comerciante.component.css']
})
export class ComercianteComponent implements OnInit {
  constructor(private auth:LoginService,private router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.auth.logout();
    Swal.fire({
      title: 'Cerrar Sesión',
      text: '¿Esta seguro que desea cerrar sesión?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
        if (result.value) {
          this.router.navigate(["/login"]);
      }
    });
    

  }
}
