package com.example.SpringDataRest.web;

import com.example.SpringDataRest.modele.Voiture;
import com.example.SpringDataRest.modele.VoitureRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*; // Ici, tout est inclus

@RestController
@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/voitures") // Ajouter ce préfixe
public class VoitureController {

    @Autowired
    private VoitureRepo voitureRepo;

    // GET all voitures
    @GetMapping
    public Iterable<Voiture> getVoitures() {
        return voitureRepo.findAll();
    }
    //Ajout de voiture
    @PostMapping
    public Voiture addVoiture(@RequestBody Voiture voiture) {
        return voitureRepo.save(voiture);
    }
    //Update
    @PutMapping("/{id}")
    public Voiture updateVoiture(@PathVariable Long id, @RequestBody Voiture voitureDetails) {
        Voiture voiture = voitureRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Voiture non trouvée avec id : " + id));

        voiture.setMarque(voitureDetails.getMarque());
        voiture.setModele(voitureDetails.getModele());
        voiture.setCouleur(voitureDetails.getCouleur());
        voiture.setImmatricule(voitureDetails.getImmatricule());
        voiture.setAnnee(voitureDetails.getAnnee());
        voiture.setPrix(voitureDetails.getPrix());
        voiture.setProprietaire(voitureDetails.getProprietaire());

        return voitureRepo.save(voiture);
    }
    // DELETE voiture par id
    @DeleteMapping("/{id}")
    public void deleteVoiture(@PathVariable Long id) {
        voitureRepo.deleteById(id);
    }
}
