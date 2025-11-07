package com.veterinariapanchito.panchito.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "historias_clinicas")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class HistoriaClinica {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Datos del dueño
    private String nombreDueno;
    private String correoDueno;
    private String celularDueno;
    private String direccionDueno;
    private String documentoDueno;
    private String numeroDocumentoDueno;

    // Datos del paciente
    private String nombrePaciente;
    private String especiePaciente;
    private String razaPaciente;
    private String edadPaciente;
    private String pesoPaciente;
    private String sexoPaciente;
    private String enfermedadesPaciente;
    private String resenaPaciente;
}

