package com.veterinariapanchito.panchito.service;

import com.veterinariapanchito.panchito.model.Mascota;
import com.veterinariapanchito.panchito.repository.MascotaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MascotaService {

    @Autowired
    private MascotaRepository mascotaRepository;

    public List<Mascota> listarTodas() {
        return mascotaRepository.findAll();
    }

    public Optional<Mascota> buscarPorId(Long id) {
        return mascotaRepository.findById(id);
    }

    public Mascota guardar(Mascota mascota) {
        return mascotaRepository.save(mascota);
    }

    public void eliminar(Long id) {
        mascotaRepository.deleteById(id);
    }

    public List<Mascota> listarPorDueno(Long duenoId) {
        return mascotaRepository.findByDuenoId(duenoId);
    }
}