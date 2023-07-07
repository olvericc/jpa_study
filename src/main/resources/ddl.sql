-- creating tb_users DDL

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

commit transaction;

rollback transaction;

-- creating tb_products DDL

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

commit transaction;

rollback transaction;