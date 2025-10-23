package com.example.SpringDataRest;

import com.example.SpringDataRest.modele.Voiture;
import com.example.SpringDataRest.modele.VoitureRepo;
import com.example.SpringDataRest.modele.Proprietaire;
import com.example.SpringDataRest.modele.ProprietaireRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;



@SpringBootApplication
public class SpringDataRestApplication {

    @Autowired
    private VoitureRepo repository;
    @Autowired
    ProprietaireRepo proprietaireRepo;
    public static void main(String[] args) {
        SpringApplication.run(SpringDataRestApplication.class, args);
    }
    @Bean
    CommandLineRunner runner(){
        return args -> {
            Proprietaire proprietaire1 = new Proprietaire("Ali" , "Hassan");
            Proprietaire proprietaire2 = new Proprietaire("Najat" , "Bani");
            proprietaireRepo.save(proprietaire1);
            proprietaireRepo.save(proprietaire2);

            // Créer des voitures et les associer aux propriétaires
            Voiture voiture1 = new Voiture("Toyota", "Corolla", "Blanc", "ABC-123", 2020, 15000, proprietaire1);
            Voiture voiture2 = new Voiture("Ford", "Focus", "Noir", "DEF-456", 2019, 13000, proprietaire1);
            Voiture voiture3 = new Voiture("Honda", "Civic", "Rouge", "GHI-789", 2021, 18000, proprietaire2);

            // Sauvegarder les voitures
            repository.save(voiture1);
            repository.save(voiture2);
            repository.save(voiture3);
        };
    }

}
