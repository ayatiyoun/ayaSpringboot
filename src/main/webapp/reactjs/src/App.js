import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import Bienvenue from './Components/Bienvenue';
import Footer from './Components/Footer';
import NavigationBar from './Components/NavigationBar';
import Voiture from './Components/Voiture';
import VoitureListe from './Components/VoitureListe';

function App() {
    const marginTop = { marginTop: "20px" };
    return (
        <Router>
            <NavigationBar />
            <Container>
                <Row>
                    <Col lg={12} style={marginTop}>
                        <Routes>
                            <Route path="/" element={<Bienvenue />} />
                            <Route path="/add" element={<Voiture />} />
                            <Route path="/list" element={<VoitureListe />} />
                        </Routes>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </Router>
    );
}

export default App;
