/* Componente de acceso para veterinarios */
import { Component, OnInit } from '@angular/core'; /* Importa Component e OnInit desde Angular */
import { CommonModule } from '@angular/common'; /* Importa CommonModule desde Angular */
import { FormsModule } from '@angular/forms'; /* Importa FormsModule desde Angular */
import { RouterModule } from '@angular/router'; /* Importa RouterModule desde Angular */
import { AuthService } from '../../services/auth'; /* Importa AuthService desde servicios */
import { Usuario } from '../../models/usuarios'; /* Importa modelo Usuario */

/* Decorador del componente */
@Component({
  selector: 'app-acceso-veterinario', /* Selector del componente */
  standalone: true, /* Indica que es un componente independiente */
  imports: [CommonModule, FormsModule, RouterModule], /* Módulos importados */
  templateUrl: './acceso-veterinario.html', /* Ruta de la plantilla HTML */
  styleUrls: ['./acceso-veterinario.css'] /* Ruta de los estilos CSS */
})
/* Clase del componente que implementa OnInit */
export class AccesoVeterinario implements OnInit {
  usuario: string = '';
  clave: string = '';
  error: string = '';
  accesoPermitido: boolean = false;
  nombreVeterinario: string = '';
  /* Constructor que inyecta AuthService */
  constructor(private authService: AuthService) {}
  /* Método ngOnInit para verificar sesión existente */
  ngOnInit(): void {
    const sesion = JSON.parse(localStorage.getItem('sesionVeterinario') || 'null');
    if (sesion) {
      this.accesoPermitido = true;
      this.nombreVeterinario = sesion.nombre;
    }
  }
  /* Método para manejar el ingreso del veterinario */
  ingresar(event?: Event): void {
    if (event) {
      event.preventDefault(); 
    }

    if (!this.usuario || !this.clave) {
      this.error = '⚠️ Debes ingresar usuario y contraseña';
      return;
    }
    /* Llama al servicio de autenticación */
    this.authService.login(this.usuario, this.clave).subscribe({
      next: (user: Usuario) => {
        localStorage.setItem('sesionVeterinario', JSON.stringify(user));
        this.accesoPermitido = true;
        this.nombreVeterinario = user.nombre;
        this.error = '';
      },
      error: () => {
        this.error = '❌ Usuario o contraseña incorrectos';
      }
    });
  }
  /* Método para cerrar sesión */
  cerrarSesion(): void {
    localStorage.removeItem('sesionVeterinario');
    this.accesoPermitido = false;
    this.usuario = '';
    this.clave = '';
    this.nombreVeterinario = '';
  }
}