const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3005;

const pays = require('./pays.json');

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
    console.log("Serveur démarré sur le port " + PORT);
});

app.get('/pays', (req, res) => {
    res.send(pays);
});

app.get('/langues', (req, res) => {
    
    res.send(pays);
});

app.get('/', (req, res) => {
    
    res.send("Bonjour");
});