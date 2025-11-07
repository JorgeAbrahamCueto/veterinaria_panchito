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
    const { nombre, correo, asunto, mensaje } = this.contacto;

    if (!nombre || !correo || !asunto || !mensaje) {
      alert('⚠️ Por favor completa todos los campos antes de enviar el mensaje.');
      return;
    }

    const mensajeConFecha = {
      nombre,
      correo,
      asunto,
      contenido: mensaje, // 👈 renombrado para que se muestre correctamente
      fecha: new Date().toISOString()
    };

    const mensajes = JSON.parse(localStorage.getItem('mensajes') || '[]');
    mensajes.push(mensajeConFecha);
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