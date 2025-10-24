CREATE TABLE role
(
    id   serial PRIMARY KEY,
    name varchar(255) NOT NULL
);

CREATE TABLE users
(
    id       serial PRIMARY KEY,
    username varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    role_id  int          NOT NULL,
    email    varchar(255) NOT NULL,
    status   varchar(1)   NOT NULL
);

CREATE TABLE anonymous_user
(
    id         serial PRIMARY KEY,
    username   varchar(255) NOT NULL,
    session_id varchar(255) NOT NULL
);

CREATE TABLE categories
(
    id              int PRIMARY KEY,
    category_name   varchar(255) NOT NULL,
    parent_category int          NULL,
    CONSTRAINT fk_parent_category_category FOREIGN KEY (parent_category) REFERENCES categories (id)
);

CREATE TABLE user_categories
(
    id                serial PRIMARY KEY,
    category_id       int NOT NULL,
    anonymous_user_id int NOT NULL,
    CONSTRAINT fk_anonymous_users_id_anonymous_user_categories FOREIGN KEY (anonymous_user_id) REFERENCES anonymous_user (id),
    CONSTRAINT fk_category_id_user_categories FOREIGN KEY (category_id) REFERENCES categories (id)
);

CREATE TABLE terms_agreement
(
    id                serial PRIMARY KEY,
    agreement         BOOLEAN NOT NULL,
    anonymous_user_id int     NOT NULL UNIQUE,
    CONSTRAINT fk_anonymous_user_id_terms_agreement FOREIGN KEY (anonymous_user_id) REFERENCES anonymous_user (id)
);
