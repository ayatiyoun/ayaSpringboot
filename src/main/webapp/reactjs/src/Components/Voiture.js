import React, { Component } from 'react';
import { Card, Form, Button, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faSave, faUndo } from '@fortawesome/free-solid-svg-icons';

export default class Voiture extends Component {
    state = {
        marque: '',
        modele: '',
        couleur: '',
        immatricule: '',
        annee: '',
        prix: '',
        proprietaireId: '',
        proprietaires: []
    };

    componentDidMount() {
        this.loadProprietaires();
    }

    loadProprietaires = () => {
        fetch("http://localhost:8080/proprietaires")
            .then(res => res.json())
            .then(data => this.setState({ proprietaires: data }))
            .catch(err => console.error("Erreur fetch proprietaires:", err));
    }

    voitureChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    submitVoiture = (event) => {
        event.preventDefault();
        const voiture = {
            immatricule: this.state.immatricule,
            marque: this.state.marque,
            modele: this.state.modele,
            couleur: this.state.couleur,
            prix: this.state.prix,
            annee: this.state.annee,
            proprietaire: { id: this.state.proprietaireId }
        };
        fetch("http://localhost:8080/voitures", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(voiture)
        })
        .then(res => res.json())
        .then(data => {
            alert("Voiture ajoutée !");
            this.setState({
                immatricule: '',
                marque: '',
                modele: '',
                couleur: '',
                prix: '',
                annee: '',
                proprietaireId: ''
            });
        })
        .catch(err => console.error("Erreur voiture :", err));
    };

    render() {
        return (
            <Card className="border border-dark bg-dark text-white mb-3">
                <Card.Header>
                    <FontAwesomeIcon icon={faPlusSquare} /> Ajouter une Voiture
                </Card.Header>
                <Form onSubmit={this.submitVoiture}>
                    <Card.Body>
                        <Row>
                            <Form.Group as={Col} controlId="formGridMarque">
                                <Form.Label>Marque</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="marque"
                                    value={this.state.marque}
                                    onChange={this.voitureChange}
                                    className="bg-dark text-white"
                                    placeholder="Entrez la marque"
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridModele">
                                <Form.Label>Modèle</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="modele"
                                    value={this.state.modele}
                                    onChange={this.voitureChange}
                                    className="bg-dark text-white"
                                    placeholder="Entrez le modèle"
                                />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col} controlId="formGridCouleur">
                                <Form.Label>Couleur</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="couleur"
                                    value={this.state.couleur}
                                    onChange={this.voitureChange}
                                    className="bg-dark text-white"
                                    placeholder="Entrez la couleur"
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridImmatricule">
                                <Form.Label>Immatriculation</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="immatricule"
                                    value={this.state.immatricule}
                                    onChange={this.voitureChange}
                                    className="bg-dark text-white"
                                    placeholder="Ex: 1234-A"
                                />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col} controlId="formGridAnnee">
                                <Form.Label>Année</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    name="annee"
                                    value={this.state.annee}
                                    onChange={this.voitureChange}
                                    className="bg-dark text-white"
                                    placeholder="Ex: 2020"
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPrix">
                                <Form.Label>Prix (DH)</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    name="prix"
                                    value={this.state.prix}
                                    onChange={this.voitureChange}
                                    className="bg-dark text-white"
                                    placeholder="Ex: 150000"
                                />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col} controlId="formGridProprietaire">
                                <Form.Label>Propriétaire</Form.Label>
                                <Form.Control
                                    as="select"
                                    required
                                    name="proprietaireId"
                                    value={this.state.proprietaireId}
                                    onChange={this.voitureChange}
                                    className="bg-dark text-white"
                                >
                                    <option value="">-- Sélectionnez un propriétaire --</option>
                                    {this.state.proprietaires.map(p => (
                                        <option key={p.id} value={p.id}>{p.nom} {p.prenom}</option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                        </Row>
                    </Card.Body>
                    <Card.Footer style={{ textAlign: "right" }}>
                        <Button size="sm" variant="success" type="submit">
                            <FontAwesomeIcon icon={faSave} /> Ajouter
                        </Button>{' '}
                        <Button
                            size="sm"
                            variant="info"
                            type="reset"
                            onClick={() => this.setState({
                                immatricule: '',
                                marque: '',
                                modele: '',
                                couleur: '',
                                prix: '',
                                annee: '',
                                proprietaireId: ''
                            })}
                        >
                            <FontAwesomeIcon icon={faUndo} /> Reset
                        </Button>
                    </Card.Footer>
                </Form>
            </Card>
        );
    }
}
