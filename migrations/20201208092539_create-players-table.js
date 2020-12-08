
exports.up = function(knex) {
  return knex.schema.createTable('players', tbl => {
      tbl.increments()
      tbl.text('name', 25)
        .notNullable()
        .index()
      tbl.timestamps(true, true) 
  })
  .createTable('game', tbl => {
      tbl.increments()
      tbl.integer('buyinamount')
        .notNullable()
      tbl.string('player')
        .index()
      tbl.timestamps(true, true)

    // foreign key info to 'players' table
      tbl.integer('game_id')
        .unsigned()
        .references('id')
        .inTable('players')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

  })
};

exports.down = function(knex) {
  return knex.scehma.dropTableIfExists('players').dropTableIfExists('games')
};
