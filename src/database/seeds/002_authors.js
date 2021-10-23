
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('authors').del()
    .then(function () {
      // Inserts seed entries
      return knex('authors').insert([
        {id: 1, name: 'Gracilhano Ramos'},
        {id: 2, name: 'Eduardo Spohr'},
        {id: 3, name: 'Carlos Drummond de Andrade'}
      ]);
    });
};
