package com.veterinariapanchito.panchito.controller;

import com.veterinariapanchito.panchito.model.Dueno;
import com.veterinariapanchito.panchito.service.DuenoService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/duenos")
public class DuenoController {

    @Autowired
    private DuenoService duenoService;

    @GetMapping
    public List<Dueno> listarTodos() {
        return duenoService.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Dueno> obtenerPorId(@PathVariable Long id) {
        return duenoService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.status(HttpStatus.NOT_FOUND).body(null));
    }

    @PostMapping
    public ResponseEntity<String> crear(@Valid @RequestBody Dueno dueno) {
        if (duenoService.existePorNumeroDocumento(dueno.getNumeroDocumento())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Ya existe un dueño con ese número de documento");
        }
        duenoService.guardar(dueno);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body("Dueño registrado correctamente");
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> actualizar(@PathVariable Long id, @Valid @RequestBody Dueno dueno) {
        if (!duenoService.buscarPorId(id).isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("No se encontró el dueño con ID " + id);
        }
        dueno.setId(id);
        duenoService.guardar(dueno);
        return ResponseEntity.ok("Dueño actualizado correctamente");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminar(@PathVariable Long id) {
        if (!duenoService.buscarPorId(id).isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("No se encontró el dueño con ID " + id);
        }
        duenoService.eliminar(id);
        return ResponseEntity.ok("Dueño eliminado correctamente");
    }
}