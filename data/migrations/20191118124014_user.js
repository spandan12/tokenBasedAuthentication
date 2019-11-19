exports.up = function (knex) {
  return Promise.all([
    knex.schema.createTable('users', function(table) {
      table.increments('id').primary();
      table.string('username').notNull();
      table.string('password').notNull();
    }),
    knex.schema.createTable('todo', function (table) {
      table.increments('id').primary();
      table.integer('user_id').references('users.id')
      table.string('name').notNull();
    }),
    knex.schema.createTable('tags', function (table) {
      table.increments('id').primary();
      table.string('name').notNull();
    }),
    knex.schema.createTable('todo_tags', function (table) {
      table.increments('id').primary();
      table.integer('todo_id').references('todo.id');
      table.integer('tags_id').references('tags.id');
    }),
  ]);
};

exports.down = function (knex) {
  return Promise.all([
    knex.schema.dropTable('users'),
    knex.schema.dropTable('todo'),
    knex.schema.dropTable('tags'),
    knex.schema.dropTable('todo_tags')
  ]);
};


