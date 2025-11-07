package com.veterinariapanchito.panchito.service;

import com.veterinariapanchito.panchito.model.HistoriaClinica;
import com.veterinariapanchito.panchito.repository.HistoriaClinicaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HistoriaClinicaService {

    @Autowired
    private HistoriaClinicaRepository historiaClinicaRepository;

    public List<HistoriaClinica> listar() {
        return historiaClinicaRepository.findAll();
    }

    public Optional<HistoriaClinica> buscarPorId(Long id) {
        return historiaClinicaRepository.findById(id);
    }

    public HistoriaClinica guardar(HistoriaClinica historiaClinica) {
        return historiaClinicaRepository.save(historiaClinica);
    }

    public void eliminar(Long id) {
        historiaClinicaRepository.deleteById(id);
    }

    // 🔎 Nuevos métodos de búsqueda según los campos del formulario

    public List<HistoriaClinica> buscarPorNombrePaciente(String nombrePaciente) {
        return historiaClinicaRepository.findByNombrePacienteContainingIgnoreCase(nombrePaciente);
    }

    public List<HistoriaClinica> buscarPorNumeroDocumentoDueno(String numeroDocumento) {
        return historiaClinicaRepository.findByNumeroDocumentoDuenoContainingIgnoreCase(numeroDocumento);
    }

    public List<HistoriaClinica> buscarPorNombreDueno(String nombreDueno) {
        return historiaClinicaRepository.findByNombreDuenoContainingIgnoreCase(nombreDueno);
    }
}