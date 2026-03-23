const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// Servir arquivos estáticos
app.use(express.static(__dirname));

// Rota que lista as músicas
app.get("/musicas", (req, res) => {
    const pasta = path.join(__dirname, "musicas");

    fs.readdir(pasta, (err, files) => {
        if (err) {
            return res.status(500).send("Erro ao ler pasta");
        }

        const mp3 = files.filter(f => f.endsWith(".mp3"));
        res.json(mp3);
    });
});

app.listen(PORT, () => {
    console.log("Servidor rodando em http://localhost:" + PORT);
});