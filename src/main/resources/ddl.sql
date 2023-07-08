-- creating table: tb_users

begin transaction;
    create table tb_users
    (
        "id" integer not null,
        "name" varchar not null,
        "email" varchar not null,
        "salary" decimal not null,
        constraint "users_id" primary key ("id")
    );
abort transaction;
rollback transaction;
commit transaction;

-- creating table: tb_products

begin transaction;
    create table tb_products
    (
        "id" integer not null,
        "description" varchar not null,
        "price" decimal not null,
        "quantity" integer not null,
        constraint "products_id" primary key ("id")
    );
abort transaction;
rollback transaction;
commit transaction;

-- script to adjust the sequence: tb_users_id_seq

begin transaction;
    create sequence tb_users_id_seq;
commit transaction;
rollback transaction;

begin transaction;
    alter table tb_users alter column id set default nextval('tb_users_id_seq');
commit transaction;
rollback transaction;

begin transaction;
    alter sequence tb_users_id_seq owned by tb_users.id;
commit transaction;
rollback transaction;

-- script to adjust the sequence: tb_products_id_seq
begin transaction;
    create sequence tb_products_id_seq;
commit transaction;
rollback transaction;

begin transaction;
    alter table tb_products alter column id set default nextval('tb_products_id_seq');
commit transaction;
rollback transaction;

begin transaction;
    alter sequence tb_products_id_seq owned by tb_products.id;
commit transaction;
rollback transaction;

-- script to create the two tables with the above modifications, that is, with the id sequentially

create table tb_users
(
    id serial primary key,
    name varchar not null,
    email varchar not null,
    salary decimal not null
);

create table tb_products
(
    id serial primary key,
    description varchar not null,
    price decimal not null,
    quantity integer not null
);