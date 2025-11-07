package com.veterinariapanchito.panchito.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.*;

@Entity
@Table(name = "reservaciones")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Reservacion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Datos del cliente
    @NotBlank
    @Column(nullable = false)
    private String nombre;

    @NotBlank
    @Column(nullable = false)
    private String contacto; // teléfono o correo

    // Datos de la mascota
    @NotBlank
    @Column(nullable = false)
    private String mascota;

    @NotBlank
    @Column(nullable = false)
    private String tipo; // Perro, Gato, Conejo, Otro

    // Datos de la cita
    @NotBlank
    @Column(nullable = false)
    private String motivo; // Consulta, Vacunación, etc.

    @Pattern(regexp = "\\d{4}-\\d{2}-\\d{2}", message = "Fecha debe ser YYYY-MM-DD")
    @Column(nullable = false, length = 10)
    private String fecha;

    @Pattern(regexp = "\\d{2}:\\d{2}", message = "Hora debe ser HH:mm")
    @Column(nullable = false, length = 5)
    private String hora;

    // Gestión administrativa
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    @Builder.Default
    private EstadoReservacion estado = EstadoReservacion.PENDIENTE;

    private String medico; // asignado por administrador
}

