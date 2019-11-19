
const router = require('express').Router();

const authenticate = require('./../middlewares/authenticate');
const authorize = require('./../middlewares/authorize');

const todoRoute = require('./todo.route');
const userRoute = require('./user.route');

router.use('/user', userRoute);
router.use('/todo', todoRoute);
module.exports = function () {


  return router;
}