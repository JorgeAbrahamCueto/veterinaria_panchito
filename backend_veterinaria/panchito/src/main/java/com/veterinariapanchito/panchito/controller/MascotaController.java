package com.veterinariapanchito.panchito.controller;

import com.veterinariapanchito.panchito.model.Mascota;
import com.veterinariapanchito.panchito.service.MascotaService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/mascotas")
public class MascotaController {

    @Autowired
    private MascotaService mascotaService;

    @GetMapping
    public List<Mascota> listarTodas() {
        return mascotaService.listarTodas();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Mascota> obtenerPorId(@PathVariable Long id) {
        return mascotaService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<String> crear(@Valid @RequestBody Mascota mascota) {
        mascotaService.guardar(mascota);
        return ResponseEntity.ok("Mascota registrada correctamente");
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> actualizar(@PathVariable Long id, @Valid @RequestBody Mascota mascota) {
        if (!mascotaService.buscarPorId(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        mascota.setId(id);
        mascotaService.guardar(mascota);
        return ResponseEntity.ok("Mascota actualizada correctamente");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminar(@PathVariable Long id) {
        if (!mascotaService.buscarPorId(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        mascotaService.eliminar(id);
        return ResponseEntity.ok("Mascota eliminada correctamente");
    }

    @GetMapping("/dueno/{duenoId}")
    public ResponseEntity<List<Mascota>> listarPorDueno(@PathVariable Long duenoId) {
        List<Mascota> mascotas = mascotaService.listarPorDueno(duenoId);
        return ResponseEntity.ok(mascotas);
    }
}