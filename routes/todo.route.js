const router = require('express').Router();
const todoCtrl = require('../controllers/todo.controller');
const authorizeToken = require('../middlewares/authorize');

router.route('/')
  .get( todoCtrl.get)
  



module.exports = router;