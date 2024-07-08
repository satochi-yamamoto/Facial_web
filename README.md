# Web App com Captura de Imagem e Reconhecimento Facial

## Descrição

Este é um aplicativo web que permite capturar imagens através da webcam do computador, salvar no banco de dados MySQL e realizar reconhecimento facial para validar usuários.

## Funcionalidades

- Captura de imagem usando a webcam
- Salvamento da imagem, data e hora no banco de dados MySQL
- Reconhecimento facial para validar usuários

## Estrutura do Banco de Dados

Crie o banco de dados e as tabelas usando o seguinte script SQL:

```sql
CREATE DATABASE web_app;

USE web_app;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    foto BLOB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE capturas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    data_hora TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    imagem BLOB,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);
