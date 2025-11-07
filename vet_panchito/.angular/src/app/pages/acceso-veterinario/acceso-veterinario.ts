import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-acceso-veterinario',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './acceso-veterinario.html',
  styleUrls: ['./acceso-veterinario.css']
})
export class AccesoVeterinario {
  usuario: string = '';
  clave: string = '';
  error: string = '';
  accesoPermitido: boolean = false;
  nombreVeterinario: string = '';

  ngOnInit(): void {
    const usuarios = JSON.parse(localStorage.getItem('usuariosVeterinarios') || '[]');
    if (!usuarios.find((u: any) => u.usuario === 'vet1')) {
      usuarios.push({ usuario: 'vet1', clave: '123456', nombre: 'Dr. Vet Uno' });
      localStorage.setItem('usuariosVeterinarios', JSON.stringify(usuarios));
    }

    const sesion = JSON.parse(localStorage.getItem('sesionVeterinario') || 'null');
    if (sesion) {
      this.accesoPermitido = true;
      this.nombreVeterinario = sesion.nombre;
    }
  }

  ingresar(): void {
    const usuarios = JSON.parse(localStorage.getItem('usuariosVeterinarios') || '[]');
    const encontrado = usuarios.find((u: any) => u.usuario === this.usuario && u.clave === this.clave);

    if (encontrado) {
      localStorage.setItem('sesionVeterinario', JSON.stringify(encontrado));
      this.accesoPermitido = true;
      this.nombreVeterinario = encontrado.nombre;
      this.error = '';
    } else {
      this.error = '❌ Usuario o contraseña incorrectos';
    }
  }

  cerrarSesion(): void {
    localStorage.removeItem('sesionVeterinario');
    this.accesoPermitido = false;
    this.usuario = '';
    this.clave = '';
    this.nombreVeterinario = '';
  }
}