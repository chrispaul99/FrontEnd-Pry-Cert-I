import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from 'src/app/models/Persona/persona';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private persona = new Persona();
  private isPersonalFormValid = false;
  private isDireccionFormValid = false;
  private isCredentialFormValid  = false;

  url = 'https://localhost:44375/api/Personas';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json'
    })
  };
  constructor(private http: HttpClient) { }
  create(p: Persona): Observable<Persona> {
    const personaBody = JSON.stringify(p);
    if (p.idPersona === undefined){
      return this.http.post<any>(this.url, personaBody, this.httpOptions);
    }
    return this.http.put<any>(this.url, personaBody, this.httpOptions);
  }
  retrieve(id: number): Observable<Persona> {
    return this.http.get<Persona>(this.url + '/' + id, this.httpOptions)
      .pipe(retry(1));
  }

  delete(p: Persona): Observable<Persona> {
    return this.http.delete<any>(this.url + '/' + p.idPersona, this.httpOptions);
  }

  list(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.url, this.httpOptions)
      .pipe(retry(1));
  }
}
