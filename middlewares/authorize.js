const jwt = require('jsonwebtoken');

const config = require('../config.json');

function authorizeToken(req, res, next) {

  
  let token = req.headers.authorization.substring(7);
  

  jwt.verify(token, config.secret, function (err, decoded) {
      
    if (err) {
        
      if (err.message === 'jwt expired') {
        
        let refreshtoken = req.headers.refreshtoken.substring(7);
        jwt.verify(refreshtoken, config.refreshTokenSecret, function (refresherr, refreshdecoded) {
          if (refresherr) {
            refresherr.msg = refresherr.message || 'invalid token';
            refresherr.status = 403;
            next(refresherr);
          }
          let username = refreshdecoded.username;
         
          let newToken = jwt.sign({ username }, config.secret, {
            algorithm: 'HS256',
            expiresIn: config.tokenLife
          });
          // console.log(newToken);
          // res.json({
          //   newToken: newToken
          // })
          next();  
        })
      }
    }
    else {
      next();
    }
  });
}

module.exports = authorizeToken;
