var User = require('../models/users').User;

exports.get = function(req, res, next) {
  User.find({}, function(err, users) {
    if (err) return next(err);
      res.json(users);
  });
  
};