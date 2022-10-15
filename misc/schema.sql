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

CREATE TABLE options (
    id int not null AUTO_INCREMENT,
    id_votes INT NOT NULL,

    yes_option varchar(10) default 'sim',
    no_option varchar(10) default 'nao',

    name_dynamic_1 varchar(50) default 'sim',
    name_dynamic_2 varchar(50) default 'nao',
    name_dynamic_3 varchar(50) default 'talvez',

    name_rating_1 varchar(50) default 'totalmente discordo',
    name_rating_2 varchar(50) default 'discordo',
    name_rating_3 varchar(50) default 'neutro',
    name_rating_4 varchar(50) default 'concordo',
    name_rating_5 varchar(50) default 'totalmente concordo',

    utc_created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (id),
    UNIQUE KEY (name),

    FOREIGN KEY(id_votes)
        REFERENCES votes(id)
);


CREATE TABLE votes (
    id int not null auto_increment,

    votes_yes int not null default 0,
    votes_no int not null default 0,

    votes_rating1 int not null default 0,
    votes_rating2 int not null default 0,
    votes_rating3 int not null default 0,
    votes_rating4 int not null default 0,
    votes_rating5 int not null default 0,

    votes_dynamic1 int not null default 0,
    votes_dynamic2 int not null default 0,
    votes_dynamic3 int not null default 0,

    utc_created_on timestamp default current_timestamp,

    primary key (id)
);
