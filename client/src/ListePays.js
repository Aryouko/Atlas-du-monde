import Accordion from 'react-bootstrap/Accordion';

export default function ListePays({ pays }) {

    const ListePays = () => {
        return pays.map(item  =>
            <Accordion.Item eventKey={item.nom} key={item.nom}>
                <Accordion.Header>{item.nom}</Accordion.Header>
                <Accordion.Body>
                    <p><strong>Continent</strong> : {item.continent}</p>
                    <p><strong>Capitale</strong> : {item.capitale}</p>
                    <p><strong>Population</strong> : {new Intl.NumberFormat('fr-FR').format(item.population)}</p>
                    <p><strong>Langues officielles</strong> : {item.langues_officielles.join(', ')}</p>
                    <p><strong>Date de création</strong> : {item.date_creation}</p>
                    <p><strong>Drapeau</strong> : <a href={item.drapeau} target="_blank" rel="noreferrer">{item.drapeau}</a></p>
                </Accordion.Body>
            </Accordion.Item>
        )
    };

    return (
        <Accordion>
            {ListePays()}
        </Accordion>
    );
}