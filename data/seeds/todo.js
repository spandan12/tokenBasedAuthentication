exports.seed = function (knex) {
  return knex('todo').del()
    .then(function () {
      return knex('todo').insert([
        {
          user_id: 1,
          name: 'drink water'
          
        },
        {
          user_id: 1,
          name: 'play games'
          
        }
      ]);
    });
};
