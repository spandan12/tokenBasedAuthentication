

module.exports = function(req,res,next){
  if(req.query.token){
    return next();
  } else{
    next({
      msg:'you dont have token'
    })
  }
}