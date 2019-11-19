const knex = require('../data/db');
const bookshelf = require('bookshelf')(knex);

const TABLE_NAME = 'todo_tags';
class TodoTags extends bookshelf.Model {
  get tableName() {
    return TABLE_NAME;
  }
}

module.exports = TodoTags;
