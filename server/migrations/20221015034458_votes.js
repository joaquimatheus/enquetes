exports.up = function(knex) {
    return knex.raw(`
        CREATE TABLE votes (
            id int not null auto_increment,
            name varchar(150) NOT NULL,

            votes int not null default 0,

            utc_created_on timestamp default current_timestamp,

            primary key (id),
            unique key (name)
        );
    `) 
};

exports.down = function(knex) {
    return knex.raw(`
        DROP TABLE votes;
    `) 
};
