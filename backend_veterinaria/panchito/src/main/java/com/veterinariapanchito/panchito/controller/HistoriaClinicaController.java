package com.veterinariapanchito.panchito.controller;

import com.veterinariapanchito.panchito.model.HistoriaClinica;
import com.veterinariapanchito.panchito.service.HistoriaClinicaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/historia-clinica")
@CrossOrigin(origins = "http://localhost:4200") // permite peticiones desde Angular
public class HistoriaClinicaController {

    @Autowired
    private HistoriaClinicaService historiaClinicaService;

    // GET: listar todas
    @GetMapping
    public List<HistoriaClinica> listar() {
        return historiaClinicaService.listar();
    }

    // GET: buscar por id
    @GetMapping("/{id}")
    public ResponseEntity<HistoriaClinica> obtenerPorId(@PathVariable Long id) {
        return historiaClinicaService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // POST: registrar nueva historia clínica
    @PostMapping
    public ResponseEntity<HistoriaClinica> registrar(@RequestBody HistoriaClinica historiaClinica) {
        HistoriaClinica guardada = historiaClinicaService.guardar(historiaClinica);
        return ResponseEntity.ok(guardada);
    }

    // DELETE: eliminar por id
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        historiaClinicaService.eliminar(id);
        return ResponseEntity.noContent().build();
    }

    // GET: filtrar por nombre del paciente
    @GetMapping("/buscar/paciente")
    public List<HistoriaClinica> buscarPorNombrePaciente(@RequestParam String nombre) {
        return historiaClinicaService.buscarPorNombrePaciente(nombre);
    }

    // GET: filtrar por número de documento del dueño
    @GetMapping("/buscar/dni")
    public List<HistoriaClinica> buscarPorNumeroDocumentoDueno(@RequestParam String dni) {
        return historiaClinicaService.buscarPorNumeroDocumentoDueno(dni);
    }

    // GET: filtrar por nombre del dueño
    @GetMapping("/buscar/dueno")
    public List<HistoriaClinica> buscarPorNombreDueno(@RequestParam String nombre) {
        return historiaClinicaService.buscarPorNombreDueno(nombre);
    }
}