const http = require("http");
const express = require('express');

require('dotenv').config();


const port = process.env.REACT_APP_PORT;

const rotas = {
    '/':'Curso de Node',
    '/user':'Entrei na pagina de usuario',
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end(rotas[req.url]) 
});

server.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port} `);
});