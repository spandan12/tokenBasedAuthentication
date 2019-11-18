exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
          username: 'Spandan Pyakurel',
          password: 'root',
          updated_at: new Date()
        },
        {
          username: 'Nikita Shrestha',
          password: 'root',
          updated_at: new Date()
        }
      ]);
    });
};
