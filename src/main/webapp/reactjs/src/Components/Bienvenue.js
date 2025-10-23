import React from 'react';
import { Card } from 'react-bootstrap';

function Bienvenue() {
    return (
        <Card className="border border-dark bg-dark text-white">
            <Card.Header>Bienvenue</Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p>Bienvenue dans l’application de gestion des voitures 🚗</p>
                    <footer className="blockquote-footer text-white">
                        CarManager © 2025
                    </footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default Bienvenue;
