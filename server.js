const express = require('express');

const path = require('path');
const app = express();
const morgan  = require('morgan');
const apiRoute = require('./routes/api.route')();

app.use(express.urlencoded({
  extended:true
}))
app.use(express.json())

app.use(morgan('dev'));


app.use('/api',apiRoute)


app.use(function(err,req,res,next){
  res.status(err.status || 400).json({
    msg:err.msg || err,
    status:err.status|| 400
  });
})

app.listen(8080,function(err,done){
  if(!err){
    console.log('server listening at port 8080');
  }
});