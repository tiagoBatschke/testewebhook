const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3000;

// Middleware para analisar o corpo das solicitações como JSON
app.use(bodyParser.json());

// Rota para receber os dados do formulário do WordPress
app.post('/wordpress-webhook', async (req, res) => {
    try {
        const formData = req.body; // Dados do formulário do WordPress

        // Enviar os dados para o NetSuite
        await sendToNetSuite(formData);

        // Responder ao WordPress com status de sucesso
        res.status(200).send('Dados recebidos e enviados com sucesso para o NetSuite.');
    } catch (error) {
        console.error('Erro ao processar os dados do formulário:', error);
        res.status(500).send('Erro ao processar os dados do formulário.');
    }
});

// Função para enviar os dados para o NetSuite (substitua com a lógica real)
async function sendToNetSuite(formData) {
   console.log(formData)
}

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});