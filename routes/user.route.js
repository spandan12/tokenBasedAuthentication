const router = require('express').Router();
const userCtrl = require('../controllers/user.controller');
const authorizeToken = require('../middlewares/authorize');

router.route('/')
  .get(authorizeToken, userCtrl.get)
  .post(authorizeToken,userCtrl.insert)


router.route('/:id')
  .get(authorizeToken,userCtrl.getById)
  .put(authorizeToken,userCtrl.update)
  .delete(authorizeToken,userCtrl.remove);


router.post('/signup', userCtrl.insert);

router.post('/login', userCtrl.login);
module.exports = router;