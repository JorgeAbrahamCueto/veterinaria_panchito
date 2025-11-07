import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Servicio } from './pages/servicio/servicio';
import { Equipo } from './pages/equipo/equipo';
import { Adopcion } from './pages/adopcion/adopcion';
import { Tienda } from './pages/tienda/tienda';
import { Reserva } from './pages/reserva/reserva';
import { Contacto } from './pages/contacto/contacto';
//import path from 'path';
import { AccesoVeterinario } from './pages/acceso-veterinario/acceso-veterinario';
import { VerCitas } from './pages/ver-citas/ver-citas';
import { VerMensajes } from './pages/ver-mensajes/ver-mensajes';
import { VerPedidos } from './pages/ver-pedidos/ver-pedidos';
import {  HistoriaClinicaComponent } from './pages/historia-clinica/historia-clinica';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'servicio', component: Servicio},
    {path: 'equipo', component: Equipo},
    {path: 'adopcion', component: Adopcion},
    {path: 'tienda', component: Tienda},
    {path: 'reserva', component: Reserva},
    {path: 'contacto', component: Contacto},
    { path: 'acceso-veterinario', component: AccesoVeterinario },
    { path: 'admin/citas', component: VerCitas },
    {path: 'admin/ver-mensajes', component: VerMensajes},
    {path: 'admin/ver-pedidos', component: VerPedidos},
    {path: 'admin/historia-clinica', component: HistoriaClinicaComponent},
    {path: '**', redirectTo: ''}
];
