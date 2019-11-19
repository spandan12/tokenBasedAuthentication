exports.seed = function (knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
          username: 'Spandan Pyakurel',
          password: 'root'
        },
        {
          username: 'Nikita Shrestha',
          password: 'root'
        }
      ]);
    });
};
