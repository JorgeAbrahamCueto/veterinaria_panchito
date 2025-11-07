import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.css']
})
export class Contacto {
  contacto = {
    nombre: '',
    correo: '',
    asunto: '',
    mensaje: ''
  };

  enviarMensaje(): void {
    const mensajes = JSON.parse(localStorage.getItem('mensajes') || '[]');
    mensajes.push(this.contacto);
    localStorage.setItem('mensajes', JSON.stringify(mensajes));

    alert('📨 ¡Mensaje enviado con éxito! Te responderemos pronto.');
    this.contacto = {
      nombre: '',
      correo: '',
      asunto: '',
      mensaje: ''
    };
  }
}