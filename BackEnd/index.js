const express = require('express');
const bodyParser = require('body-parser');

// Protocolo de comunicação entre APIs e outros serviços
// CORS: autoriza para qualquer tipo de serviço (front-end, outras APIs, etc)
const cors = require('cors');

const app = express();
const port = 8081;

// Importações
const proprietario = require('./controllers/ProprietarioControlls.js');
const veiculo = require('./controllers/VeiculoControlls.js');

// Rotas
app.use(bodyParser.json());

// Função CORS para a autorização do uso da API
app.use(cors());

app.get('/', (req, res) => res.send('Estou aqui'));

app.use('/proprietario', proprietario);
app.use('/veiculo', veiculo);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}!`));
