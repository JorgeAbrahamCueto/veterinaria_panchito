package com.veterinariapanchito.panchito.service;

import com.veterinariapanchito.panchito.model.Dueno;
import com.veterinariapanchito.panchito.repository.DuenoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DuenoService {

    @Autowired
    private DuenoRepository duenoRepository;

    public List<Dueno> listarTodos() {
        return duenoRepository.findAll();
    }

    public Optional<Dueno> buscarPorId(Long id) {
        return duenoRepository.findById(id);
    }

    public boolean existePorNumeroDocumento(String numeroDocumento) {
        return duenoRepository.existsByNumeroDocumento(numeroDocumento);
    }

    public Dueno guardar(Dueno dueno) {
        return duenoRepository.save(dueno);
    }

    public void eliminar(Long id) {
        duenoRepository.deleteById(id);
    }
}