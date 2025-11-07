package com.veterinariapanchito.panchito.repository;

import com.veterinariapanchito.panchito.model.Reservacion;
import com.veterinariapanchito.panchito.model.EstadoReservacion;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReservacionRepository extends JpaRepository<Reservacion, Long> {

    // Buscar por estado (PENDIENTE, CONFIRMADA, etc.)
    List<Reservacion> findByEstado(EstadoReservacion estado);

    // Buscar por nombre del cliente
    List<Reservacion> findByNombreContainingIgnoreCase(String nombre);

    // Buscar por contacto (teléfono o correo)
    List<Reservacion> findByContactoContainingIgnoreCase(String contacto);
}
