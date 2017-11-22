### Schema

CREATE DATABASE IF NOT EXISTS burgers_db;

USE burgers_db;


CREATE TABLE burgers (
id INT AUTO_INCREMENT NOT NULL,
createdAt TIMESTAMP NOT NULL,
burger_name VARCHAR(50) NOT NULL,
devoured BOOL DEFAULT FALSE,
datetime TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY(id)
);

INSERT INTO burgers (burger_name, devoured) VALUES ('portobello mushroom burger ', TRUE);
INSERT INTO burgers (burger_name, devoured) VALUES ('lamb burger with goat cheese & relish', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('Ron Swanson turkey leg burger',  TRUE);
INSERT INTO burgers (burger_name, devoured) VALUES ('elk burger',  FALSE);

