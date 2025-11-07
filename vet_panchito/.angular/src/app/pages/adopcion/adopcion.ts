import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adopcion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './adopcion.html',
  styleUrls: ['./adopcion.css']
})
export class Adopcion {
  @ViewChild('formulario') formularioRef!: ElementRef;
  mascotaSeleccionada: string = '';

  scrollToFormulario(nombreMascota: string): void {
    this.mascotaSeleccionada = nombreMascota;
    if (this.formularioRef) {
      this.formularioRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  registrarAdopcion(form: any): void {
    const nombre = form.value.nombre;
    const correo = form.value.correo;
    const mascota = form.value.mascota;
    const mensaje = form.value.mensaje;

    const registro = {
      nombre,
      correo,
      mascota,
      mensaje,
      fecha: new Date().toISOString()
    };
    // Guardar en localStorage, luego se puede enviar a una API
    const registros = JSON.parse(localStorage.getItem('adopciones') || '[]');
    registros.push(registro);
    localStorage.setItem('adopciones', JSON.stringify(registros));
    /*
    this.http.post('https://tu-api.com/adopciones', registro).subscribe({
      next: () => {
        form.resetForm();
        this.mascotaSeleccionada = '';
        const modalElement = document.getElementById('confirmacionModal');
      if (modalElement) {
        const modal = new (window as any).bootstrap.Modal(modalElement);
        modal.show();
    }
  },
  error: () => {
    alert('Ocurrió un error al registrar la adopción.');
  }
});
*/

    form.resetForm();
    this.mascotaSeleccionada = '';

    const modalElement = document.getElementById('confirmacionModal');
    if (modalElement) {
      const modal = new (window as any).bootstrap.Modal(modalElement);
      modal.show();
    }
  }
}