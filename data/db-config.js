// we are taking all this info from fruits-router and putting it in here instead

const knex = require("knex");

const knexFile = require("../knexfile");

const knexConfig = knexFile.development;
// getting this from knexfile.js the dev key

module.exports = knex(knexConfig);
