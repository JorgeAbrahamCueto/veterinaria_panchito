import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { ReservacionService } from '../../services/reservacion';
import { Reservacion } from '../../models/reservaciones';

@Component({
  selector: 'app-ver-citas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ver-citas.html',
  styleUrls: ['./ver-citas.css']
})
export class VerCitas implements OnInit {
  // ✅ Observable en lugar de array
  citas$!: Observable<Reservacion[]>;

  constructor(private reservacionService: ReservacionService) {}

  ngOnInit(): void {
    // ✅ Asignamos directamente el observable
    this.citas$ = this.reservacionService.listar();
  }

  eliminarCita(id: number | undefined): void {
    if (!id) return;
    this.reservacionService.eliminar(id).subscribe({
      next: () => {
        // ✅ Recargamos el observable después de eliminar
        this.citas$ = this.reservacionService.listar();
      },
      error: (err) => console.error('Error al eliminar cita', err)
    });
  }
}