-- Temp scripts to run locally
DROP TABLE IF EXISTS public.user CASCADE;
DROP TABLE IF EXISTS public.foodtruck CASCADE;

CREATE TABLE public.user (
    id bigserial primary key,
    name varchar(20) NOT NULL UNIQUE,
    email text NOT NULL UNIQUE,
    updated_at timestamp NOT NULL DEFAULT current_timestamp,
    created_at timestamp NOT NULL DEFAULT now()
);;

CREATE TABLE public.foodtruck (
    id bigserial primary key,
    owner_id bigserial REFERENCES public.user ON DELETE CASCADE,
    name varchar(20) NOT NULL,
    latitude real NOT NULL,
    longitude real NOT NULL,
    updated_at timestamp NOT NULL DEFAULT current_timestamp,
    created_at timestamp NOT NULL DEFAULT now()
);;

-- To check if basic queries even work
insert into public.user (name, email) VALUES ('psilospore', 'jasfsa@gmail.com');;
insert into public.foodtruck (name, latitude, longitude, owner_id) VALUES ('Syed Krazy Kabobs', 101.2, 80.9,(select id from public.user where name = 'psilospore'));;