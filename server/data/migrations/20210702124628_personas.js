exports.up = function (knex) {
  return knex.schema.createTable('personas', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('picture')
    table.string('music')
    table.string('nationality')
    table.string('food')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('personas')
}
