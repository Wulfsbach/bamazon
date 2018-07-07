
drop database if  exists bamazon;
create database bamazon;

use bamazon;

create table products(
item_id INT Not  null auto_increment,
product_name varchar(100)null,
department_name varchar(50) null,
price decimal (10,5) null,
stock_quantity int  null,
Primary Key(item_id));

insert into products( product_name,department_name,price,stock_quantity)
values ("Javascript: The Good Parts", "Books",23.84,4);

insert into products (product_name,department_name,price,stock_quantity)
values("XBOX One Wireless Controller-Black", "Electronics",64.89,10);

insert into products (product_name,department_name,price,stock_quantity)
values ("Pokemon: Let's Go Pikachu", "Video Games",69.96,50);

insert into products (product_name,department_name,price,stock_quantity)
values("Nespresso Expert with Aeroccino", "Home and Kitchen", 449.00, 6);

insert into products (product_name,department_name,price,stock_quantity)
values("HOMFA Bamboo Night Stand" , "Bedroom", 46.74, 16);

insert into products (product_name,department_name,price,stock_quantity)
values("World Map Pendant Necklace","Jewelery",24.99,123);

insert into products (product_name,department_name,price,stock_quantity)
values("Repel windproof Travel Umbrella","Outdoor",34.95,20);
insert into products (product_name,department_name,price,stock_quantity)
values("PGX Offset Driver", "Golf", 71.48,23);
insert into products (product_name,department_name,price,stock_quantity)
values ("Summer Infant 3D Lite Stroller","Infant", 119.97,5);
insert into products (product_name,department_name,price,stock_quantity)
values("Portable Tire Inflator","Automotive",29.99,1);