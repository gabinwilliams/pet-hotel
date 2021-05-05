
--DB name pet_hotel

CREATE TABLE "owners" (
"id" SERIAL PRIMARY KEY,
"owner" VARCHAR
);
CREATE TABLE "pets"(
"id" SERIAL PRIMARY KEY,
"owner_id" int REFERENCES owners,
"breed" VARCHAR,
"color" VARCHAR,
"checked_in" DATE
);