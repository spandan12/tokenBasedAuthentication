const knex = require('../data/db');
const bookshelf = require('bookshelf')(knex);
const User = require('./user.model');
const Tag = require('./tags.model');
const TodoTag = require('./todo_tags.model');

const TABLE_NAME = 'todo';
class Todo extends bookshelf.Model {
  get tableName() {
    return TABLE_NAME;
  }

  tags(){
    return this.hasMany(TodoTag,'todo_id');
  }

}

module.exports = Todo;
