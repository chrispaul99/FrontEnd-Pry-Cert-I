import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from 'src/app/models/Persona/persona';
import { retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url = environment.url+"/Personas";
  constructor(private http: HttpClient) { }

  create(p: Persona): Observable<Persona> {
    const personaBody = JSON.stringify(p);
    if (p.idPersona === undefined){
      return this.http.post<any>(this.url, personaBody, environment.httpOptions);
    }
    return this.http.put<any>(this.url, personaBody, environment.httpOptions);
  }

  retrieve(id: number): Observable<Persona> {
    return this.http.get<Persona>(this.url + '/' + id, environment.httpOptions)
      .pipe(retry(1));
  }

  delete(p: Persona): Observable<Persona> {
    return this.http.delete<any>(this.url + '/' + p.idPersona, environment.httpOptions);
  }

  list(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.url, environment.httpOptions)
      .pipe(retry(1));
  }
}
