

const User = require('../model/user.model');

function findAll() {
  return User.fetchAll();
}

function findUser(id) {
  return new User({ id })
    .fetch()
    .then(user => user)
    .catch(User.NotFoundError, () => {
      throw Boom.notFound('User not found');
    });
}

function findByUserName(user){
  return User.where({
    username: user.username,
    password: user.password
  })
    .fetch()
    .then(user => user)
    .catch(User.NotFoundError, () => {
      throw Boom.notFound('User not found');
    });
}

function insertUser(user) {
  return new User({
    username: user.username,
    password: user.password
  }).save();
}

function updateUser(id, user) {
  return new User({ id }).save({
     username: user.username,
      password: user.password });

}
function deleteUser(id) {
  return new User({ id }).fetch().then(user => user.destroy());
}


module.exports = {
  findAll, findUser, insertUser, updateUser, deleteUser, findByUserName
}