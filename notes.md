# notes

## ways of managing a DB schema

1. migrations === preferred
2. using a gui/cli tool
3. using sql scripts

## story

- v1: record client's phone number
- v2: 2002, record client's email
- v3: 2007, contact info (type, value), multiple emails/phones/socia media accounts

* strings will be VARCHAR
* install KNEX globally: npm i -g knex
* knex migrate:make bootstrap
* knex migrate:latest
* knex seed:run

what happens if you run v3 code against v4 database.

**Every table MUST have a Primary Key (PK)**

Data Model > validation > db constraints

## Steps

- npx knex init to create knexfile.js
- moved config object to knexfile.js from fruits router.
- removed staging and production properties from knexfile.js
- added db-config.js
- changed the reference on fruits router to bring db from db-config.js

**every change to the schema, needs a new migration**
