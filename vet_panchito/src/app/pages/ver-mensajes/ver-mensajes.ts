import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ver-mensajes',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './ver-mensajes.html',
  styleUrls: ['./ver-mensajes.css']
})
export class VerMensajes {
  mensajes: any[] = [];

  // 👇 Aquí van tus propiedades para la simulación de respuesta
  respuestaIndex: number | null = null;
  respuestaTexto: string = '';
i: any;

  ngOnInit(): void {
    this.mensajes = JSON.parse(localStorage.getItem('mensajes') || '[]');
  }

  eliminarMensaje(index: number): void {
    this.mensajes.splice(index, 1);
    localStorage.setItem('mensajes', JSON.stringify(this.mensajes));
  }

  mostrarRespuesta(index: number): void {
    this.respuestaIndex = index;
    this.respuestaTexto = '';
  }

  cancelarRespuesta(): void {
    this.respuestaIndex = null;
    this.respuestaTexto = '';
  }

  simularRespuesta(index: number): void {
    const mensaje = this.mensajes[index];
    const respuesta = {
      para: mensaje.correo,
      asunto: 'Re: ' + mensaje.asunto,
      cuerpo: this.respuestaTexto,
      fecha: new Date().toISOString()
    };

    const respuestas = JSON.parse(localStorage.getItem('respuestas') || '[]');
    respuestas.push(respuesta);
    localStorage.setItem('respuestas', JSON.stringify(respuestas));

    alert(`✅ Respondiendo a ${mensaje.nombre} (${mensaje.correo})`);

    this.cancelarRespuesta();
  }
}