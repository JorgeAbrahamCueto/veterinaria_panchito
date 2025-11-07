export interface Reservacion {
  id?: number;
  nombre: string;
  mascota: string;
  tipo: string;
  motivo: string;
  fecha: string;
  hora: string;
  contacto: string;
  estado?: string;
  medico?: string;
}
