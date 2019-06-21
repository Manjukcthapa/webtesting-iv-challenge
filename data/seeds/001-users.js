
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        { name: 'manju'},
        { name: 'anju'},
        { name: 'sanju'}
      ]);
    });
};
