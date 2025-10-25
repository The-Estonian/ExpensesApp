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

CREATE TABLE posts
(
    id         serial PRIMARY KEY,
    title      varchar(255),
    post       varchar(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_id    INTEGER NOT NULL,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
);
