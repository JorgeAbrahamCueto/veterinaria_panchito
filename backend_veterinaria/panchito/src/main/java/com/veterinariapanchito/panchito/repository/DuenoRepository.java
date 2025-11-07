package com.veterinariapanchito.panchito.repository;

import com.veterinariapanchito.panchito.model.Dueno;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DuenoRepository extends JpaRepository<Dueno, Long> {
    boolean existsByNumeroDocumento(String numeroDocumento);
}