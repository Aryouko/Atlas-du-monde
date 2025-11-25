const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3005;

const data = require('./pays.json');
const pays = data.pays;

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
    console.log("Serveur démarré sur le port " + PORT);
});

app.get('/pays', (req, res) => {
    res.json(pays);
});

app.get('/langues', (req, res) => {

    if (!req.query.continent) {
        return res.status(400).json({ 
            erreur: "Le paramètre 'continent' est requis" 
        });
    }

    const reqContinent = req.query.continent.replace('+', ' ');
    const paysContinent = pays.filter(unPays => unPays.continent.toLowerCase() === reqContinent);

    if (paysContinent.length == 0) {
        return res.status(400).json({ 
            erreur: "Le continent n'existe pas" 
        });
    }

    const listLangues = paysContinent.flatMap(unPays => unPays.langues_officielles);

    const resListLangues = [...new Set(listLangues)];
    
    res.json(resListLangues);
});