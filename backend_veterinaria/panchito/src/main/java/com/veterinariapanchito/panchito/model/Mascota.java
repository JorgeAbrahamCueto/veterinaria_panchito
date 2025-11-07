package com.veterinariapanchito.panchito.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.*;

@Entity
@Table(name = "mascotas")
@Data
@NoArgsConstructor
@AllArgsConstructor


public class Mascota {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "El nombre es obligatorio")
    private String nombre;

    @NotBlank(message = "La especie es obligatoria")
    private String especie;

    @NotBlank(message = "La raza es obligatoria")
    private String raza;

    @Min(value = 0, message = "La edad no puede ser negativa")
    private int edad;

    @DecimalMin(value = "0.0", inclusive = false, message = "El peso debe ser mayor a 0")
    private double peso;

    @NotBlank(message = "El sexo es obligatorio")
    private String sexo;

    private String enfermedades;

    private String resena;

    @ManyToOne
    @JoinColumn(name = "dueno_id", nullable = false)
    private Dueno dueno;
}
