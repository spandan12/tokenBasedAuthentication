exports.seed = function (knex) {
  return knex('tags').del()
    .then(function () {
      return knex('tags').insert([
        {
          name: 'daily activity'
        },
        {
          name: 'entertaintment'
        }
      ]);
    });
};
