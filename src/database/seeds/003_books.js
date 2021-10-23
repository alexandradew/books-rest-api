
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {id: 1, name: 'Vidas Secas', author_id: 1, category_id: 1},
        {id: 2, name: 'A Batalha do Apocalipse', author_id: 2, category_id: 2},
        {id: 3, name: 'Alguma Poesia', author_id: 3, category_id: 3}
      ]);
    });
};
