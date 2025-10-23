import React, { Component } from 'react';
import axios from 'axios';
import { Card, Table, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

export default class VoitureListe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            voitures: []
        };
        this.deleteVoiture = this.deleteVoiture.bind(this);
    }

    componentDidMount() {
        this.loadVoitures();
    }

    loadVoitures() {
        axios.get("http://localhost:8080/voitures")
            .then(response => {
                this.setState({ voitures: response.data });
            })
            .catch(error => {
                console.error("Erreur lors de la récupération des voitures :", error);
            });
    }

    deleteVoiture(id) {
        axios.delete(`http://localhost:8080/voitures/${id}`)
            .then(() => {
                // Recharge la liste après suppression
                this.loadVoitures();
            })
            .catch(error => {
                console.error("Erreur lors de la suppression :", error);
            });
    }
    editVoiture = (voiture) => {
        this.setState({
            id: voiture.id,              // on garde l'id pour le PUT
            marque: voiture.marque,
            modele: voiture.modele,
            couleur: voiture.couleur,
            immatricule: voiture.immatricule,
            annee: voiture.annee,
            prix: voiture.prix,
            proprietaire: voiture.proprietaire?.id
        });
    }


    render() {
        return (
            <Card className="border border-dark bg-dark text-white">
                <Card.Header>Liste des Voitures</Card.Header>
                <Card.Body>
                    <Table>
                        <thead>
                        <tr>
                            <th>Marque</th>
                            <th>Couleur</th>
                            <th>Année</th>
                            <th>Prix</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.voitures.length === 0 ? (
                            <tr align="center">
                                <td colSpan="5">Aucune Voiture n’est disponible</td>
                            </tr>
                        ) : (
                            this.state.voitures.map((voiture, index) => (
                                <tr key={index}>
                                    <td>{voiture.marque}</td>
                                    <td>{voiture.couleur}</td>
                                    <td>{voiture.annee}</td>
                                    <td>{voiture.prix}</td>
                                    <td>
                                       <Button variant="warning" onClick={() => this.editVoiture(voiture)}>Modifier</Button>{' '}
                                        <Button
                                            size="sm"
                                            variant="outline-danger"
                                            onClick={() => this.deleteVoiture(voiture.id)}
                                        >
                                            Supprimer
                                        </Button>

                                    </td>
                                </tr>
                            ))
                        )}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        );
    }
}
