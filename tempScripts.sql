-- Temp scripts to run locally
DROP TABLE IF EXISTS public.user CASCADE;
DROP TABLE IF EXISTS public.foodtruck CASCADE;
DROP TABLE IF EXISTS public.lu_user_type CASCADE;
DROP TABLE IF EXISTS public.lu_cuisine_type CASCADE;

-- Lookup tables

CREATE TABLE public.lu_user_type (
    code varchar(16) PRIMARY KEY,
    description text NOT NULL
);;


CREATE TABLE public.lu_cuisine_type (
    code varchar(16) PRIMARY KEY,
    description text NOT NULL    
);;

----------------

CREATE TABLE public.user (
    id bigserial primary key,
    user_type varchar(16) NOT NULL DEFAULT 'FOODIE' REFERENCES public.lu_user_type (code),
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

-- populate lookup tables

insert into public.lu_user_type (code, description) VALUES ('FOODIE', 'Foodie'), ('OWNER', 'Owner');;

insert into public.lu_cuisine_type (code, description) VALUES ('VEGAN', 'Vegan'), ('GLUTEN_FREE', 'Gluten Free');;


-- To check if basic queries even work
insert into public.user (name, email) VALUES ('psilospore', 'jasfsa@gmail.com');;
insert into public.foodtruck (name, latitude, longitude, owner_id) VALUES ('Syed Krazy Kabobs', 101.2, 80.9,(select id from public.user where name = 'psilospore'));;