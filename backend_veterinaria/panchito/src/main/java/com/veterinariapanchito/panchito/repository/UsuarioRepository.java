package com.veterinariapanchito.panchito.repository;

import com.veterinariapanchito.panchito.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    // Para login (usuario + clave)
    Optional<Usuario> findByUsuarioAndClave(String usuario, String clave);

    // Para validar duplicados en registro (solo usuario)
    Optional<Usuario> findByUsuario(String usuario);
}