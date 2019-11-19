exports.seed = function (knex) {
  return knex('todo_tags').del()
    .then(function () {
      return knex('todo_tags').insert([
        {
          todo_id: 7,
          tags_id: 7
        },
        {
          todo_id: 8,
          tags_id: 8
        }
      ]);
    });
};
