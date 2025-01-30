const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

// Servir les fichiers statiques (index.html, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`🚀 Frontend disponible sur http://localhost:${PORT}`);
});
