
exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.increments();
        table
          .timestamp('created_at')
          .notNull()
          .defaultTo(knex.raw('now()'));
        table.timestamp('updated_at').notNull();
        table.string('username').notNull();
        table.string('password').notNull();
      });
  
};

exports.down = function(knex) {
   
        return knex.schema.dropTable('users');
  
};
