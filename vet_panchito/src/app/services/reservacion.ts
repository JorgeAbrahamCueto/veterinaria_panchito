import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservacion } from '../models/reservaciones';

@Injectable({
  providedIn: 'root'
})
export class ReservacionService {
  private apiUrl = 'http://localhost:8080/api/reservaciones';

  constructor(private http: HttpClient) {}

  listar(): Observable<Reservacion[]> {
    return this.http.get<Reservacion[]>(this.apiUrl);
  }

  crear(cita: Reservacion): Observable<Reservacion> {
    return this.http.post<Reservacion>(this.apiUrl, cita);
  }
  
  actualizar(id: number, cita: Reservacion): Observable<Reservacion> {
  return this.http.put<Reservacion>(`${this.apiUrl}/${id}`, cita);
}

  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
