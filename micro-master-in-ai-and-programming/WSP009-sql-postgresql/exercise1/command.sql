CREATE USER your-username-here WITH PASSWORD 'your-password-here' SUPERUSER;
CREATE USER tiendb WITH PASSWORD 'tiensql' SUPERUSER;

CREATE DATABASE memo-wall;

CREATE TABLE memos (
    id SERIAL,
    content TEXT,
    image VARCHAR(255),
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    PRIMARY KEY (id)
);

CREATE TABLE users (
    id SERIAL,
    username VARCHAR(255),
    password VARCHAR(255),
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
);