DROP DATABASE IF EXISTS project_dashboard;

-- create project_dashboard database

CREATE DATABASE project_dashboard;

USE project_dashboard;


-- create table for attendee information
CREATE TABLE people (
	id INT auto_increment NOT NULL,
    Name VARCHAR(30) NOT NULL,
	Email VARCHAR(30) NOT NULL,
    Street_1 VARCHAR(30) NOT NULL,
    Street_2 VARCHAR(30) NOT NULL,
    City VARCHAR(30) NOT NULL,
    State VARCHAR(30) NOT NULL,
    Zipcode INT NOT NULL,
    Attending BOOLEAN NOT NULL,
    PRIMARY KEY (id)
);
