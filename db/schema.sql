### Schema

CREATE DATABASE IF NOT EXISTS burgers_db;

USE burgers_db;


CREATE TABLE burgers (
id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
burger_name VARCHAR(50) NOT NULL,
devoured BOOL DEFAULT FALSE,
datetime TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO burgers (burger_name, devoured) VALUES ('PORTOBELLO MUSHROOM BURGER', TRUE);
INSERT INTO burgers (burger_name, devoured) VALUES ('LAMB BURGER WITH GOAT CHEESE & RELISH', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('TURKEY BURGER',  TRUE);
INSERT INTO burgers (burger_name, devoured) VALUES ('ELK BURGER',  FALSE);