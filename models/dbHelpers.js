// where we write our knex queries

const knex = require('knex');
const config = require('../knexfile');
const db = knex(config.development);

module.exports = {
    add,
    findAll
}

// now we can write our queries
// add, find, findById, remove, update

async function add(player) {
    const [id] = await db('players').insert(player);
    return id;
}

function findAll() {
    return db('players')
}