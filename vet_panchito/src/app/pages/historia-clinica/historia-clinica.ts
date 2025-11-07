import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HistoriaClinicaService } from '../../services/historiaclinica';
import { HistoriaClinica } from '../../models/historiasclinicas';

@Component({
  selector: 'app-historia-clinica',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './historia-clinica.html',
  styleUrls: ['./historia-clinica.css']
})
export class HistoriaClinicaComponent implements OnInit {

  historiasGuardadas: HistoriaClinica[] = [];
  historia: HistoriaClinica = this.nuevaHistoria();
  modoEdicion = false;
  indiceEdicion = -1;

  busquedaNombre = '';
  busquedaDNI = '';
  busquedaCodigo = '';

  constructor(private historiaService: HistoriaClinicaService) {}

  ngOnInit(): void {
    this.cargarHistorias();
  }

  nuevaHistoria(): HistoriaClinica {
    return {
      nombreDueno: '',
      correoDueno: '',
      celularDueno: '',
      direccionDueno: '',
      documentoDueno: '',
      numeroDocumentoDueno: '',
      nombrePaciente: '',
      especiePaciente: '',
      razaPaciente: '',
      edadPaciente: '',
      pesoPaciente: '',
      sexoPaciente: '',
      enfermedadesPaciente: '',
      resenaPaciente: ''
    };
  }

  cargarHistorias(): void {
    this.historiaService.listar().subscribe(data => {
      this.historiasGuardadas = data;
    });
  }

  guardarHistoria(): void {
    this.historiaService.registrar(this.historia).subscribe((nueva) => {
      alert('✅ Historia guardada correctamente.');
      // ✅ en lugar de recargar todo, agregamos la nueva historia al array local
      this.historiasGuardadas = [...this.historiasGuardadas, nueva];
      this.historia = this.nuevaHistoria();
      this.modoEdicion = false;
      this.indiceEdicion = -1;
    });
  }

  editarHistoria(index: number): void {
    this.historia = { ...this.historiasGuardadas[index] };
    this.indiceEdicion = index;
    this.modoEdicion = true;
  }

  eliminarHistoria(id: number): void {
    if (confirm('¿Estás seguro de eliminar esta historia?')) {
      this.historiaService.eliminar(id).subscribe(() => {
        // ✅ filtramos localmente para no depender de recargar todo
        this.historiasGuardadas = this.historiasGuardadas.filter(h => h.id !== id);
      });
    }
  }

  // 🔎 Búsquedas en backend
  buscarPorNombrePaciente(): void {
    if (this.busquedaNombre.trim() !== '') {
      this.historiaService.buscarPorPaciente(this.busquedaNombre).subscribe(data => {
        this.historiasGuardadas = data;
      });
    } else {
      this.cargarHistorias();
    }
  }

  buscarPorDni(): void {
    if (this.busquedaDNI.trim() !== '') {
      this.historiaService.buscarPorDni(this.busquedaDNI).subscribe(data => {
        this.historiasGuardadas = data;
      });
    } else {
      this.cargarHistorias();
    }
  }

  buscarPorCodigo(): void {
    if (this.busquedaCodigo.trim() !== '') {
      this.historiaService.obtenerPorId(Number(this.busquedaCodigo)).subscribe(data => {
        this.historiasGuardadas = data ? [data] : [];
      });
    } else {
      this.cargarHistorias();
    }
  }

  // 🖨️ Imprimir historia clínica
  imprimir(historia: HistoriaClinica): void {
    // Guardamos en localStorage (opcional)
    localStorage.setItem('historiaSeleccionada', JSON.stringify(historia));

    const contenido = `
      <h2>Historia Clínica #${historia.id ?? ''}</h2>
      <h3>👤 Datos del dueño</h3>
      <p><strong>Nombre:</strong> ${historia.nombreDueno}</p>
      <p><strong>Correo:</strong> ${historia.correoDueno}</p>
      <p><strong>Celular:</strong> ${historia.celularDueno}</p>
      <p><strong>Dirección:</strong> ${historia.direccionDueno}</p>
      <p><strong>Documento:</strong> ${historia.documentoDueno} - ${historia.numeroDocumentoDueno}</p>

      <h3>🐾 Datos del paciente</h3>
      <p><strong>Nombre:</strong> ${historia.nombrePaciente}</p>
      <p><strong>Especie:</strong> ${historia.especiePaciente}</p>
      <p><strong>Raza:</strong> ${historia.razaPaciente}</p>
      <p><strong>Edad:</strong> ${historia.edadPaciente}</p>
      <p><strong>Peso:</strong> ${historia.pesoPaciente}</p>
      <p><strong>Sexo:</strong> ${historia.sexoPaciente}</p>
      <p><strong>Enfermedades previas:</strong> ${historia.enfermedadesPaciente || 'Ninguna'}</p>
      <p><strong>Reseña clínica:</strong> ${historia.resenaPaciente}</p>
    `;

    const ventana = window.open('', '_blank', 'width=800,height=600');
    if (ventana) {
      ventana.document.write(`
        <html>
          <head>
            <title>Imprimir Historia Clínica</title>
            <style>
              body { font-family: Arial, sans-serif; margin: 20px; }
              h2, h3 { margin-bottom: 10px; }
              p { margin: 4px 0; }
            </style>
          </head>
          <body>
            ${contenido}
            <script>
              window.onload = function() {
                window.print();
                window.close();
              }
            </script>
          </body>
        </html>
      `);
      ventana.document.close();
    }
  }
}