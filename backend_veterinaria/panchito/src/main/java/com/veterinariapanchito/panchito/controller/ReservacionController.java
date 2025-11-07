package com.veterinariapanchito.panchito.controller;

import com.veterinariapanchito.panchito.model.EstadoReservacion;
import com.veterinariapanchito.panchito.model.Reservacion;
import com.veterinariapanchito.panchito.service.ReservacionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reservaciones")
@CrossOrigin(origins = "http://localhost:4200") // Ajusta al puerto de tu Angular
public class ReservacionController {

    private final ReservacionService service;

    public ReservacionController(ReservacionService service) {
        this.service = service;
    }

    // Listar todas o filtrar por estado/cliente/contacto
    @GetMapping
    public List<Reservacion> listar(
            @RequestParam(required = false) String estado,
            @RequestParam(required = false) String cliente,
            @RequestParam(required = false) String contacto
    ) {
        if (estado != null) {
            return service.porEstado(EstadoReservacion.valueOf(estado.toUpperCase()));
        }
        if (cliente != null) {
            return service.porCliente(cliente);
        }
        if (contacto != null) {
            return service.porContacto(contacto);
        }
        return service.listar();
    }

    // Obtener una reservación por ID
    @GetMapping("/{id}")
    public ResponseEntity<Reservacion> obtener(@PathVariable Long id) {
        Reservacion r = service.obtener(id);
        return r != null ? ResponseEntity.ok(r) : ResponseEntity.notFound().build();
    }

    // Crear nueva reservación
    @PostMapping
    public Reservacion crear(@RequestBody Reservacion reservacion) {
        return service.crear(reservacion);
    }

    // Eliminar reservación
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        service.eliminar(id);
        return ResponseEntity.noContent().build();
    }

    // Cambiar estado (ej: CONFIRMADA, CANCELADA, ATENDIDA)
    @PutMapping("/{id}/estado")
    public ResponseEntity<Reservacion> cambiarEstado(
            @PathVariable Long id,
            @RequestParam String estado
    ) {
        Reservacion r = service.cambiarEstado(id, EstadoReservacion.valueOf(estado.toUpperCase()));
        return r != null ? ResponseEntity.ok(r) : ResponseEntity.notFound().build();
    }

    // Asignar médico
    @PutMapping("/{id}/medico")
    public ResponseEntity<Reservacion> asignarMedico(
            @PathVariable Long id,
            @RequestParam String medico
    ) {
        Reservacion r = service.asignarMedico(id, medico);
        return r != null ? ResponseEntity.ok(r) : ResponseEntity.notFound().build();
    }
}