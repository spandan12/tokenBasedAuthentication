const knex = require('../data/db');
const bookshelf = require('bookshelf')(knex);

const TABLE_NAME = 'tags';
class Tag extends bookshelf.Model {
  get tableName() {
    return TABLE_NAME;
  }
}

module.exports = Tag;
