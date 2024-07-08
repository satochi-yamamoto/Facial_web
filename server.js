const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const port = 3000;

app.use(bodyParser.json({ limit: '10mb' })); // Aumentar o limite do payload

// Configuração do banco de dados
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sua_senha',
  database: 'seu_banco_de_dados'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Conectado ao banco de dados MySQL');
});

// Rota para salvar a imagem
app.post('/save-photo', (req, res) => {
  const { image, username, timestamp } = req.body;

  // Extrair apenas os dados da imagem base64
  const base64Data = image.replace(/^data:image\/png;base64,/, '');

  const query = 'INSERT INTO photos (image, username, timestamp) VALUES (?, ?, ?)';
  db.query(query, [base64Data, username, timestamp], (err, result) => {
    if (err) throw err;
    res.send('Imagem salva com sucesso!');
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
