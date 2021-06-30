DROP DATABASE IF EXISTS employeetrackerDB;

CREATE DATABASE employeetrackerDB;

USE employeetrackerDB;

CREATE TABLE department (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    PRIMARY KEY (id)
    );

CREATE TABLE role (
	id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY (id)
);

CREATE TABLE employee (
	id INT NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    PRIMARY KEY (id)
    );
    
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Steven', 'Crutchfield', 100, 350);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Johnny", "Appleseed", 200, 400);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Chris", "Rock", 300, 450);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Steven", "Crutchfield", 100, 350);