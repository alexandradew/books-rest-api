
exports.up = function(knex) {
  return knex.schema.createTable('books', function (table) {
    table.increments();
    table.string('name').notNullable();
    table.integer('category_id').notNullable().unsigned().index().references('id').inTable('categories');
    table.integer('author_id').notNullable().unsigned().index().references('id').inTable('author');
    table.timestamps();
  })  
};

exports.down = function(knex) {
  return knex.schema.dropTable('books');
};