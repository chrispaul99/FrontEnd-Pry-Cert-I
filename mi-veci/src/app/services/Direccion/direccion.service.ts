import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Direccion } from 'src/app/models/Direccion/direccion';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DireccionService {
  url = environment.url+"/Direcciones";
  constructor(private http: HttpClient) { }
  create(d: Direccion): Observable<Direccion> {
    const direccionBody = JSON.stringify(d);
    if (d.idDireccion === undefined){
      return this.http.post<any>(this.url, direccionBody, environment.httpOptions);
    }
    return this.http.put<any>(this.url, direccionBody, environment.httpOptions);
  }
  retrieve(id: number): Observable<Direccion> {
    return this.http.get<Direccion>(this.url + '/' + id, environment.httpOptions)
      .pipe(retry(1));
  }

  delete(d: Direccion): Observable<Direccion> {
    return this.http.delete<any>(this.url + '/' + d.idDireccion, environment.httpOptions);
  }

  list(): Observable<Direccion[]> {
    return this.http.get<Direccion[]>(this.url, environment.httpOptions)
      .pipe(retry(1));
  }
}
