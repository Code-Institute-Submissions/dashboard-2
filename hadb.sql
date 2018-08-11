use hadb;

CREATE TABLE people (
	id INTEGER AUTO_INCREMENT,
    first_name VARCHAR(50),
    second_name VARCHAR(50),
    gender VARCHAR(10),
    cause_of_death VARCHAR(200),
    storyline VARCHAR(200),
    year_died INTEGER,
    family VARCHAR(50),
    marital_stat VARCHAR(50),
    partner VARCHAR(100),
    job VARCHAR(50),
    house VARCHAR (100),
    PRIMARY KEY (id)
);

    

