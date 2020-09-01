import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { Negocio } from '../../models/Negocio/negocio';

@Injectable({
  providedIn: 'root'
})
export class NegocioService {

  url = 'https://localhost:44375/api/Negocios';
  private nombreNegocio: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // tslint:disable-next-line: object-literal-key-quotes
      'Accept': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  listarNegocios(): Observable<Negocio[]>{
    return this.http.get<Negocio[]>(this.url, this.httpOptions).pipe(retry(1));
  }

  retrieve(id: number): Observable<Negocio> {
    return this.http.get<Negocio>(this.url + '/' + id, this.httpOptions)
      .pipe(
        retry(1)
      );
  }
  save(n: Negocio): Observable<any> {
    const negocioBody = JSON.stringify(n);
    if (n.idNegocio === undefined) {
      return this.http.post<any>(this.url, negocioBody, this.httpOptions);
    }
    return this.http.put<any>(this.url, negocioBody, this.httpOptions);
  }

  buscarNegocio(criterio: string): Observable<Negocio[]> {
    return this.http.get<Negocio[]>(this.url + '/Search?criterio=' + criterio, this.httpOptions);
  }
}
