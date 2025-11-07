package com.veterinariapanchito.panchito.repository;

import com.veterinariapanchito.panchito.model.HistoriaClinica;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HistoriaClinicaRepository extends JpaRepository<HistoriaClinica, Long> {

    // Buscar por nombre del paciente
    List<HistoriaClinica> findByNombrePacienteContainingIgnoreCase(String nombrePaciente);

    // Buscar por número de documento del dueño
    List<HistoriaClinica> findByNumeroDocumentoDuenoContainingIgnoreCase(String numeroDocumentoDueno);

    // Buscar por nombre del dueño
    List<HistoriaClinica> findByNombreDuenoContainingIgnoreCase(String nombreDueno);
}