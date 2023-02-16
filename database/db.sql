CREATE DATABASE postsdb;

CREATE TABLE post(
    id SERIAL PRIMARY KEY,
    postname VARCHAR(255) UNIQUE,
    postdescription VARCHAR(255)
);