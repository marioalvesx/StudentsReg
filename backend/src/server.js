const express = require('express');

const app = express();

// GET, POST, PUT, DELETE - Métodos da API Rest

app.get('/', (req, res) => {
    return res.json({ message: "Hello World" });
});

app.listen(3333);
