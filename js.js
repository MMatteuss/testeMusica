const fs = require("fs");

const pasta = "./musicas";

const arquivos = fs.readdirSync(pasta)
    .filter(f => f.endsWith(".mp3"));

fs.writeFileSync("musicas.json", JSON.stringify(arquivos, null, 2));

console.log("musicas.json criado!");