const jwt = require('jsonwebtoken');

const userService = require('../services/user.service');
const config = require('../config.json');
const jwtExpirySeconds = '300s';

function get(req, res, next) {
  userService.findAll()
    .then(data => res.json({ data }))
    .catch(err => {
      err.msg = 'retrieve operation failed';
      next(err);
    });

}

function getById(req, res, next) {
  userService
    .findUser(req.params.id)
    .then(data => res.json({ data }))
    .catch(err => {
      err.msg = 'retrieve operation failed';
      next(err);
    });
}

function insert(req, res, next) {
  userService
    .insertUser(req.body)
    .then(data => res.json({ data }))
    .catch(err => {
      err.msg = 'insert operation failed';
      next(err);
    });
}

function update(req, res, next) {
  userService
    .updateUser(req.params.id, req.body)
    .then(data => res.json({ data }))
    .catch(err => {
      err.msg = 'update operation failed';
      next(err);
    });
}
function remove(req, res, next) {
  userService
    .deleteUser(req.params.id)
    .then(data => res.json({ deleted: data }))
    .catch(err => {
      err.msg = 'delete operation failed';
      next(err);
    });
}



function login(req, res, next) {
    userService
      .findByUserName(req.body)
      .then( user => {res.json({
        response: generatetoken(req.body.username)
      })
     })
      .catch(err => {
        err.msg = 'login failed';
        next(err)
      })
}

function generatetoken(username){

  let token = jwt.sign({ username }, config.secret, {
    algorithm: 'HS256',
    expiresIn: config.tokenLife
  });

  let refreshToken = jwt.sign({username}, config.refreshTokenSecret,
     { 
      algorithm: 'HS256',
       expiresIn: config.refreshTokenLife
      });

      const response = {
        "status": "Logged in",
        "token": token,
        "refreshToken": refreshToken,
    }
    let tokenList = {};
    tokenList[refreshToken] = response;
    return tokenList;
}

module.exports = {
  get, getById, insert, update, remove, login
}