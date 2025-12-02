import { useState, useEffect } from 'react'
import ListePays from './ListePays';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Pays()  {
    
    const [statePays, setStatePays] = useState([]);
    const [statePaysFiltre, setStatePaysFiltre] = useState([]);
    const [stateContinent, setStateContinent] = useState("");
    const [stateRecherchePays, setStateRecherchePays] = useState("");
    const [stateTri, setStateTri] = useState("Alphabétique");

    useEffect(() =>  {
        const fetchPays = async () => {
            try {
                const res = await fetch('http://localhost:3005/pays');
                const donnees = await res.json();
                setStatePays(donnees);
                setStatePaysFiltre(donnees);
            } catch (error) {
                console.error("Erreur lors de l'appel des pays", error);
            }
        };

        fetchPays();
    }, []);

    useEffect(() => {
        let paysFiltres = [...statePays];
        if (stateContinent !== "") {
            paysFiltres = paysFiltres.filter(pays => pays.continent === stateContinent);
        }

        if (stateRecherchePays !== "") {
            paysFiltres = paysFiltres.filter(pays => 
                pays.nom.toLowerCase().includes(stateRecherchePays.toLowerCase())
            );
        }
        
        if (stateTri === "Alphabétique") {
            paysFiltres = paysFiltres.sort((a, b) => a.nom.toLowerCase().localeCompare(b.nom.toLowerCase()));
        } else  if (stateTri === "Population") {
            paysFiltres = paysFiltres.sort((a, b) => b.population - a.population);
        }

        setStatePaysFiltre(paysFiltres);
    }, [stateContinent, stateRecherchePays, stateTri, statePays]);

    return (
        <Container className="mt-4">
            <Row className="mb-3 g-2">
                <Col md={4}>
                    <Form.Control
                        type="text"
                        placeholder="Rechercher un pays..."
                        value={stateRecherchePays}
                        onChange={(e) => setStateRecherchePays(e.target.value)}
                    />
                </Col>
                <Col md={4}>
                    <Form.Select
                        value={stateContinent}
                        onChange={(e) => setStateContinent(e.target.value)}
                    >
                        <option value="" selected>Tous les continents</option>
                        <option value="Afrique">Afrique</option>
                        <option value="Amérique du Nord">Amérique du Nord</option>
                        <option value="Amérique du Sud">Amérique du Sud</option>
                        <option value="Asie">Asie</option>
                        <option value="Europe">Europe</option>
                        <option value="Océanie">Océanie</option>
                    </Form.Select>
                </Col>
                <Col md={4}>
                    <Form.Select
                        value={stateTri}
                        onChange={(e) => setStateTri(e.target.value)}
                    >
                        <option value="Alphabétique" selected>Trier par ordre alphabétique</option>
                        <option value="Population">Trier par population</option>
                    </Form.Select>
                </Col>
            </Row>

            <ListePays pays={statePaysFiltre} />
        </Container>
    );
}