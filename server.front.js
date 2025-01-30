/**
 * @file server.front.js - Serveur Express pour le frontend
 * @module server.front
 */

const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

/**
 * Servir les fichiers statiques du dossier `public`
 * @function
 */
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Route principale - Retourne `index.html`
 * @function
 */
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Frontend disponible sur http://localhost:${PORT}`);
});
