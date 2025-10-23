package com.example.SpringDataRest.web;

import com.example.SpringDataRest.modele.Proprietaire;
import com.example.SpringDataRest.modele.ProprietaireRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*; // Tout est inclus

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/proprietaires") // Préfixe pour les propriétaires
public class ProprietaireController {

    @Autowired
    private ProprietaireRepo proprietaireRepo;

    // GET all propriétaires
    @GetMapping
    public Iterable<Proprietaire> getProprietaires() {
        return proprietaireRepo.findAll();
    }

    // DELETE propriétaire par id
    @DeleteMapping("/{id}")
    public void deleteProprietaire(@PathVariable Long id) {
        proprietaireRepo.deleteById(id);
    }
}
