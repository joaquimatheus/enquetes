-- docs

-- pk === PRIMARY KEY
-- uq === UQ
-- fk === FK
-- df === DEFAULT KEY
-- seq_nomedatabela === SEQUENCE

-- tables
-- polls
-- options
-- votes

CREATE TABLE polls (
    option_question ENUM('yes/no', 'open', 'one-five'),
    id INT NOT NULL AUTO_INCREMENT,
    title TEXT NOT NULL,
    option_id INT NOT NULL,
    time_start DATETIME NOT NULL,
    time_end DATETIME NOT NULL,
    utc_created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    UNIQUE KEY (title),
    FOREIGN KEY(option_id)
        REFERENCES options(id)
) ENGINE=INNODB;

CREATE TABLE options (
    id INT NOT NULL AUTO_INCREMENT,
    name TEXT NOT NULL,
    id_votes INT NOT NULL,
    utc_created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    UNIQUE KEY (title),
    FOREIGN KEY(id_votes)
        REFERENCES votes(id)
) ENGINE=INNODB;

CREATE TABLE votes (
    id INT NOT NULL AUTO_INCREMENT,
    name TEXT NOT NULL,
    votes INT,
    utc_created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    UNIQUE KEY (name)
) ENGINE=INNODB;
