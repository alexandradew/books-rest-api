
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {id: 1, name: 'Romance'},
        {id: 2, name: 'Fantasia'},
        {id: 3, name: 'Poesia'}
      ]);
    });
};
