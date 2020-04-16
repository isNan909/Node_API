CREATE ROLE api_user WITH LOGIN PASSWORD ‘root';
ALTER ROLE api_user CREATEDB;


CREATE TABLE food (
  ID BIGINT PRIMARY KEY,
  Dish VARCHAR(255) NOT NULL,
  Country VARCHAR(255) NOT NULL
);


INSERT INTO food (dish, country) 
VALUES  (‘Migas', ‘Mexican’), (’Tom Yam',’Thai’);
