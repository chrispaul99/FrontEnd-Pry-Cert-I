import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Lista } from '../../models/Lista/lista';
import { retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  url = environment.url+"/Listas";
  constructor(private http: HttpClient) { }

  get(id: number): Observable<Lista> {
    return this.http.get<Lista>(this.url+"/"+id, environment.httpOptions).pipe(retry(1));
  }
}
