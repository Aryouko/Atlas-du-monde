import { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

export default function Langues()  {
    
    const [stateLangues, setStateLangues] = useState([]);
    const [stateContinent, setStateContinent] = useState("");

    useEffect(() =>  {
        const fetchLangues = async () => {
            try {
                const res = await fetch('http://localhost:3005/langues?continent=' + stateContinent.toLowerCase());
                const donnee = await res.json();
                setStateLangues(donnee);
            } catch (error) {
                console.error("Erreur lors de l'appel des langues", error);
            }
        };

        if (stateContinent !== "") {
            fetchLangues();
        } 
    }, [stateContinent]);

    const Reponse = () => {
        if (stateContinent === "") {
            return "Choisissez un continent dans la liste déroulante pour voir toutes les langues officielles qu'on y parle!";
        } else if (stateLangues.length !== 0) {
            return "Les langues parlées en " + stateContinent + " sont :" + stateLangues.map(item  => {
                return " " +item;
            });
        }
    };

    return (
        <Container className="mt-4">
            <Form.Select 
                className="w-auto mb-3"
                value={stateContinent}
                onChange={(e) => setStateContinent(e.target.value)}
            >
                <option value="">Tous les continents</option>
                <option value="Europe">Europe</option>
                <option value="Afrique">Afrique</option>
                <option value="Asie">Asie</option>
                <option value="Amérique du Nord">Amérique du Nord</option>
                <option value="Amérique du Sud">Amérique du Sud</option>
                <option value="Océanie">Océanie</option>
            </Form.Select>
            <p>{Reponse()}</p>
        </Container>
    );
}