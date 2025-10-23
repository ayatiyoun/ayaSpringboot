import React from 'react';
import { Navbar } from 'react-bootstrap';

function Footer() {
    return (
        <Navbar fixed="bottom" bg="dark" variant="dark" className="text-center">
            <div className="mx-auto text-white">
                © 2025 - Gestion des Voitures
            </div>
        </Navbar>
    );
}

export default Footer;
