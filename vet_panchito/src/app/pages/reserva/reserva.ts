import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Reservacion } from '../../models/reservaciones';
import { ReservacionService } from '../../services/reservacion';

@Component({
  selector: 'app-reserva',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reserva.html',
  styleUrls: ['./reserva.css'],
})
export class Reserva {
  cita: Reservacion = {
    nombre: '',
    mascota: '',
    tipo: '',
    motivo: '',
    fecha: '',
    hora: '',
    contacto: ''
  };

  constructor(private reservacionService: ReservacionService) {}

  confirmarReserva(): void {
    this.reservacionService.crear(this.cita).subscribe({
      next: () => {
        alert('✅ ¡Cita reservada con éxito!');
        
        this.cita = {
          nombre: '',
          mascota: '',
          tipo: '',
          motivo: '',
          fecha: '',
          hora: '',
          contacto: ''
        };
      },
      error: (err) => {
        console.error('Error al reservar cita', err);
        alert('❌ Ocurrió un error al reservar la cita');
      }
    });
  }
}
