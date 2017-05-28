-- Temp scripts to run locally
DROP TABLE public.USER;
DROP TABLE public.foodtruck;

CREATE TABLE public.user (
    id bigserial primary key,
    name varchar(20) NOT NULL,
    email text NOT NULL,
    date_added timestamp default NULL
);;

CREATE TABLE public.foodtruck (
    id bigserial primary key,
    owner_id REFERENCES public.users ON DELETE CASCADE,
    name varchar(20) NOT NULL,
    latitude real NOT NULL,
    longitude real NOT NULL,
    date_added timestamp default NULL
);;


insert into public.user (name, email) VALUES ('Syed', 'jasfsa@gmail.com');;
insert into public.foodtruck (name, latitude, longitude, owner_id) VALUES ('Syed Krazy Kabobs', 101.2, 80.9,(select id where name = 'Syed'));;