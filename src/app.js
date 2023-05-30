const express = require('express');
const app = express();
const router = require('../routes/index'); 

//Router Middlewares
app.use(express.json());
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});


app.use('/api/v1/', router);

module.exports = app;
