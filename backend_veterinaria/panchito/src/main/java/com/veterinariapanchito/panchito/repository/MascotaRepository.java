package com.veterinariapanchito.panchito.repository;

import com.veterinariapanchito.panchito.model.Mascota;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MascotaRepository extends JpaRepository<Mascota, Long> {

    // Buscar todas las mascotas de un dueño específico
    List<Mascota> findByDuenoId(Long duenoId);

    // Buscar por nombre (puede devolver varias si hay duplicados)
    List<Mascota> findByNombreContainingIgnoreCase(String nombre);

    // Buscar por especie (ej. "Perro", "Gato")
    List<Mascota> findByEspecieIgnoreCase(String especie);

    // Buscar por raza
    List<Mascota> findByRazaIgnoreCase(String raza);

    // Buscar por sexo
    List<Mascota> findBySexoIgnoreCase(String sexo);
}