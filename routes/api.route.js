
const router = require('express').Router();

const authenticate = require('./../middlewares/authenticate');
const authorize = require('./../middlewares/authorize');

const userRoute = require('./user.route');

module.exports = function () {

  router.use('/user', userRoute)
  return router;
}