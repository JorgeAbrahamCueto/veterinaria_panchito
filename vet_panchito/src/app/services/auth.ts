import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) {}

  // Login
  login(usuario: string, clave: string): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}/login`, { usuario, clave });
  }

  // Registro (opcional, para pruebas desde Angular)
  register(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}/register`, usuario);
  }
}