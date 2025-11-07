package com.veterinariapanchito.panchito.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.*;

@Entity
@Table(name = "duenos")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Dueno {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "El nombre es obligatorio")
    @Size(max = 100, message = "El nombre no puede exceder 100 caracteres")
    private String nombre;

    @NotBlank(message = "El correo es obligatorio")
    @Email(message = "El correo debe tener un formato válido")
    private String correo;

    @NotBlank(message = "El celular es obligatorio")
    @Size(max = 15, message = "El celular no puede exceder 15 caracteres")
    private String celular;

    @NotBlank(message = "La dirección es obligatoria")
    @Size(max = 200, message = "La dirección no puede exceder 200 caracteres")
    private String direccion;

    @NotBlank(message = "El tipo de documento es obligatorio")
    private String documento;

    @NotBlank(message = "El número de documento es obligatorio")
    @Size(min = 8, max = 12, message = "El número de documento debe tener entre 8 y 12 caracteres")
    private String numeroDocumento;
}