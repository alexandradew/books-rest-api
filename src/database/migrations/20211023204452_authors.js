
exports.up = function(knex) {
  return knex.schema.createTable('authors', function (table) {
    table.increments();
    table.string('name').notNullable();
    table.timestamps();
  })  
};

exports.down = function(knex) {
  return knex.schema.dropTable('authors');
};