

const userService = require('../services/todo.service');
const config = require('../config.json');

function get(req, res, next) {
  userService.findAll()
    .then(data => res.json({ data }))
    .catch(err => {
      err.msg = 'retrieve operation failed';
      next(err);
    });

}


module.exports = {
  get
}