DROP DATABASE IF EXISTS database_images;
CREATE DATABASE database_images;
USE database_images;
CREATE TABLE images(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(30),
    imagen text,
    descripcion text,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
)