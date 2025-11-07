import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ver-citas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ver-citas.html',
  styleUrls: ['./ver-citas.css']
})
export class VerCitas {
  citas: any[] = [];

  ngOnInit(): void {
    this.citas = JSON.parse(localStorage.getItem('reservas') || '[]');
  }

  eliminarCita(index: number): void {
    this.citas.splice(index, 1);
    localStorage.setItem('reservas', JSON.stringify(this.citas));
  }
}