CREATE DATABASE foodie;
-- /l foodie
-- /c foodie

CREATE ROLE api_user WITH LOGIN PASSWORD ‘root';
ALTER ROLE api_user CREATEDB;


-- \q
psql -d postgres -U api_user;



CREATE TABLE food (
  ID SERIAL PRIMARY KEY,
  Dish VARCHAR(255) NOT NULL,
  Country VARCHAR(255) NOT NULL
);


INSERT INTO food (dish, country) VALUES  (‘Migas', ‘Mexican’),(’Tom Yam', ’Thai’);

SELECT * FROM food