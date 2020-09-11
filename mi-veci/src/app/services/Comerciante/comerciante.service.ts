import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Comerciante } from '../../models/Comerciante/comerciante';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComercianteService {

  url = environment.url+"/Comerciantes";

  constructor(private http: HttpClient) { }

  getComerciante(id:number): Observable<Comerciante>{
    return this.http.get<Comerciante>(this.url+'/'+id, environment.httpOptions).pipe(retry(1));
  }
}
