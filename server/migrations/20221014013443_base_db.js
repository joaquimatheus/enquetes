exports.up = function(knex) {
    return knex.raw(`
        CREATE TABLE polls (
            id int not null auto_increment,
            title varchar(255) not null,
            option_id INT NOT NULL,
            time_start DATETIME NOT NULL,
            time_end DATETIME NOT NULL,

            utc_created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

            states_options ENUM('not-init', 'in-progress', 'finished'),
            status varchar(40) NOT NULL,

            unique (title),
            primary key (id),

            FOREIGN KEY (option_id)
                REFERENCES options(id)
        );
    `)
};

exports.down = function(knex) {
    return knex.raw(`
        DROP TABLE polls;
    `) 
};
