package com.veterinariapanchito.panchito.service;

import com.veterinariapanchito.panchito.model.Usuario;
import com.veterinariapanchito.panchito.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Optional<Usuario> registrarUsuario(Usuario nuevoUsuario) {
        if (usuarioRepository.findByUsuario(nuevoUsuario.getUsuario()).isPresent()) {
            return Optional.empty();
        }
        return Optional.of(usuarioRepository.save(nuevoUsuario));
    }

    public Optional<Usuario> login(String usuario, String clave) {
        return usuarioRepository.findByUsuarioAndClave(usuario, clave);
    }

    public List<Usuario> listarUsuarios() {
        return usuarioRepository.findAll();
    }
}