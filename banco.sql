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
