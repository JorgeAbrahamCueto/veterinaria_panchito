import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reserva',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reserva.html',
  styleUrls: ['./reserva.css'],
})
export class Reserva {
  cita = {
    nombre: '',
    mascota: '',
    tipo: '',
    motivo: '',
    fecha: '',
    hora: '',
    contacto: '',
  };

  confirmarReserva(): void {
    const reservas = JSON.parse(localStorage.getItem('reservas') || '[]');
    reservas.push(this.cita);
    localStorage.setItem('reservas', JSON.stringify(reservas));

    alert('✅ ¡Cita reservada con éxito!');
    this.cita = {
      nombre: '',
      mascota: '',
      tipo: '',
      motivo: '',
      fecha: '',
      hora: '',
      contacto: '',
    };
  }
}
