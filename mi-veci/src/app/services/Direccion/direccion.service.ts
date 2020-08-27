import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Direccion } from 'src/app/models/Direccion/direccion';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DireccionService {
  url = 'https://localhost:44375/api/Direcciones';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json'
    })
  };
  constructor(private http: HttpClient) { }
  create(d: Direccion): Observable<Direccion> {
    const direccionBody = JSON.stringify(d);
    if (d.idDireccion === undefined){
      return this.http.post<any>(this.url, direccionBody, this.httpOptions);
    }
    return this.http.put<any>(this.url, direccionBody, this.httpOptions);
  }
  retrieve(id: number): Observable<Direccion> {
    return this.http.get<Direccion>(this.url + '/' + id, this.httpOptions)
      .pipe(retry(1));
  }

  delete(d: Direccion): Observable<Direccion> {
    return this.http.delete<any>(this.url + '/' + d.idDireccion, this.httpOptions);
  }

  list(): Observable<Direccion[]> {
    return this.http.get<Direccion[]>(this.url, this.httpOptions)
      .pipe(retry(1));
  }
}
