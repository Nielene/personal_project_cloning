const pgp = require('pg-promise')({});
const db = pgp('postgres://localhost:5432/re_reddit')

module.exports = { db };
