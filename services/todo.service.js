

const Todo = require('../model/todo.model');
const TodoTags = require('../model/todo_tags.model');

function findAll() {

    return Todo.fetchAll();
}


module.exports = {
    findAll
}