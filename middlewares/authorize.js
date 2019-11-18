const jwt = require('jsonwebtoken');

const config = require('../config.json');

function authorizeToken(req, res, next) {
  
  let token = req.headers.authorization.substring(7);

  let refreshToken = req.headers.refreshToken.substring(7);

  // let refreshToken = jwt.sign({username}, config.refreshTokenSecret,
  //   { 
  //    algorithm: 'HS256',
  //     expiresIn: config.refreshTokenLife
  //    });
  jwt.verify(token, config.secret, function(err, decoded) {
    if(err){
      jwt.verify(refreshToken, config.refreshToken, function(err, decoded){
        if(err){
          err.msg = 'invalid token';
          err.status = 401;
          next(err);
        }
        else{
          
          next();
        }
      })
      
      
    }
    else{
      next();
    }
  });
}

module.exports =   authorizeToken;
