import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { Negocio } from '../../models/Negocio/negocio';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NegocioService {

  url = environment.url+"/Negocios";

  constructor(private http: HttpClient) { }

  listarNegocios(): Observable<Negocio[]>{
    return this.http.get<Negocio[]>(this.url, environment.httpOptions).pipe(retry(1));
  }

  retrieve(id: number): Observable<Negocio> {
    return this.http.get<Negocio>(this.url + '/' + id, environment.httpOptions)
      .pipe(
        retry(1)
      );
  }
  save(n: Negocio): Observable<any> {
    const negocioBody = JSON.stringify(n);
    if (n.idNegocio === undefined) {
      return this.http.post<any>(this.url, negocioBody, environment.httpOptions);
    }
    return this.http.put<any>(this.url, negocioBody, environment.httpOptions);
  }

  buscarNegocio(criterio: string,id:number): Observable<Negocio[]> {
    return this.http.get<Negocio[]>(this.url + '/Search?criterio=' + criterio+'&id='+id, environment.httpOptions);
  }
  listarNegociosComerciante(id:number): Observable<Negocio[]> {
    return this.http.get<Negocio[]>(this.url + '/MisNegocios?id=' + id, environment.httpOptions);
  }
  delete(id:number): Observable<any> {
    return this.http.delete<any>(this.url+'/'+id, environment.httpOptions);
  }
}
