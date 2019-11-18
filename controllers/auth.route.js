const express= require('express');
const router = express.Router();
var dbMOdel =  'db_model';

router.route('/')
  .get(function(req,res,next){

  })
  .post(function(req,res,next){

  })
  .delete(function(req,res,next){

  })
  .put(function(req,res,next){

  })


router.route('/login')

.post(function(req,res,next){
    // form data request data 
    // validation
    // db query
    // response 
    console.log('req.username >>',req.body);
    res.json({
      msg:'hello'
    })
})

router.route('/register')

.post(function(req,res,next){
    // form data request data 
    // validation
    // db query
    // response 
})

module.exports = router;

