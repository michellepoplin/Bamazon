
CREATE DATABASE bamazon_db;

USE Bamazon;

CREATE TABLE products (
item_id INTEGER AUTO_INCREMENT,
product_name VARCHAR (50),
department_name VARCHAR (50),
price INTEGER (200),
stock_quantity INTEGER (200),
PRIMARY KEY (item_id)
);

USE bamazon_db;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Blouse', 'clothing', 64.99, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Sheets', 'bedding', 112.00, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Crackers', 'food', 1.50, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Lipstick', 'cosmetics', 8.75, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Monopoly', 'games', 9.99, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('earings', 'jewlery', 14.95, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Levi Jeans', 'clothing', 49.99, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Foundation', 'cosmetics', 7.95, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Zootopia', 'movies', 11.99, 0);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Down Pillows', 'bedding', 37.95, 1);

select * from Products;