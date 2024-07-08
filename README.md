# Aplicativo Web de Captura de Imagem com Webcam

Este projeto é um aplicativo web que permite capturar uma imagem usando a webcam do computador e salvar a imagem no banco de dados MySQL junto com a data, hora e o nome do usuário logado.

## Funcionalidades

- Captura de imagem da webcam.
- Salva a imagem no banco de dados MySQL.
- Registra a data, hora e o nome do usuário.

## Tecnologias Utilizadas

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express
- **Banco de Dados:** MySQL

## Requisitos

- Node.js
- MySQL

## Instalação

### 1. Clonar o Repositório

```bash
git clone https://github.com/ydsoftware1979/Facial_web.git
cd Facial_web


Configurar o Banco de Dados
Crie uma tabela photos no seu banco de dados MySQL:

sql
Copiar código
CREATE TABLE photos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  image LONGTEXT NOT NULL,
  username VARCHAR(255) NOT NULL,
  timestamp DATETIME NOT NULL

4. Configurar o Banco de Dados no Backend
Atualize as informações de conexão com o banco de dados no arquivo server.js:

javascript
Copiar código
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sua_senha',
  database: 'seu_banco_de_dados'
});


 Executar o Backend
bash
Copiar código
node server.js
