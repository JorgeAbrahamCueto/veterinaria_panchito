package com.veterinariapanchito.panchito.service;

import com.veterinariapanchito.panchito.model.EstadoReservacion;
import com.veterinariapanchito.panchito.model.Reservacion;
import com.veterinariapanchito.panchito.repository.ReservacionRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReservacionService {

    private final ReservacionRepository repo;

    public ReservacionService(ReservacionRepository repo) {
        this.repo = repo;
    }

    // Listar todas las reservaciones
    public List<Reservacion> listar() {
        return repo.findAll();
    }

    // Crear nueva reservación (estado por defecto PENDIENTE)
    public Reservacion crear(Reservacion reservacion) {
        reservacion.setEstado(EstadoReservacion.PENDIENTE);
        return repo.save(reservacion);
    }

    // Obtener una reservación por ID
    public Reservacion obtener(Long id) {
        return repo.findById(id).orElse(null);
    }

    // Eliminar una reservación
    public void eliminar(Long id) {
        repo.deleteById(id);
    }

    // Cambiar estado de la reservación
    public Reservacion cambiarEstado(Long id, EstadoReservacion estado) {
        return repo.findById(id).map(r -> {
            r.setEstado(estado);
            return repo.save(r);
        }).orElse(null);
    }

    // Asignar médico a la reservación
    public Reservacion asignarMedico(Long id, String medico) {
        return repo.findById(id).map(r -> {
            r.setMedico(medico);
            return repo.save(r);
        }).orElse(null);
    }

    // Buscar por estado
    public List<Reservacion> porEstado(EstadoReservacion estado) {
        return repo.findByEstado(estado);
    }

    // Buscar por nombre de cliente
    public List<Reservacion> porCliente(String nombre) {
        return repo.findByNombreContainingIgnoreCase(nombre);
    }

    // Buscar por contacto
    public List<Reservacion> porContacto(String contacto) {
        return repo.findByContactoContainingIgnoreCase(contacto);
    }
}

