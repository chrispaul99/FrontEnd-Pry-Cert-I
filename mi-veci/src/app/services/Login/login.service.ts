import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Login } from '../../models/Persona/persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'https://localhost:44375/api/Login/Authenticate';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json'
    })
  };
  constructor(private http: HttpClient) { }
  login(p: Login): Observable<Login> {
    const personaBody = JSON.stringify(p);
    return this.http.post<any>(this.url, personaBody, this.httpOptions);
  }
}
