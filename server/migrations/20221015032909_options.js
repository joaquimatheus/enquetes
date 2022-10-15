exports.up = function(knex) {
    return knex.raw(`
        CREATE TABLE options (
            id int not null AUTO_INCREMENT,
            name varchar(255) NOT NULL,
            
            id_votes INT NOT NULL,
            utc_created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

            PRIMARY KEY (id),
            UNIQUE KEY (name),
            
            FOREIGN KEY(id_votes)
                REFERENCES votes(id)
        );
    `)  
};

exports.down = function(knex) {
    return knex.raw(`
        DROP TABLE options;
    `) 
};
