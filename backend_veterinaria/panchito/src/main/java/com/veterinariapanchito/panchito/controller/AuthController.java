package com.veterinariapanchito.panchito.controller;

import com.veterinariapanchito.panchito.model.Usuario;
import com.veterinariapanchito.panchito.service.UsuarioService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:4200") // Ajusta si tu frontend corre en otro puerto
public class AuthController {

    private final UsuarioService usuarioService;

    public AuthController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    // LOGIN
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Usuario loginRequest) {
        Optional<Usuario> usuarioOpt =
                usuarioService.login(loginRequest.getUsuario(), loginRequest.getClave());

        return usuarioOpt
                .<ResponseEntity<?>>map(ResponseEntity::ok) // forzamos el tipo común
                .orElseGet(() -> ResponseEntity
                        .status(HttpStatus.UNAUTHORIZED)
                        .body("❌ Usuario o contraseña incorrectos"));
    }

    // REGISTER
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Usuario nuevoUsuario) {
        Optional<Usuario> usuarioOpt = usuarioService.registrarUsuario(nuevoUsuario);

        return usuarioOpt
                .<ResponseEntity<?>>map(u ->
                        ResponseEntity.status(HttpStatus.CREATED).body(u))
                .orElseGet(() -> ResponseEntity
                        .status(HttpStatus.CONFLICT)
                        .body("⚠️ El usuario ya existe"));
    }

    // LISTAR USUARIOS (para pruebas)
    @GetMapping("/usuarios")
    public ResponseEntity<List<Usuario>> listarUsuarios() {
        return ResponseEntity.ok(usuarioService.listarUsuarios());
    }
}
