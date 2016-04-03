var ObjectID = require('mongodb').ObjectID,
    User = require('../models/users').User,
    HttpError = require('../error/').HttpError;

exports.get = function(req, res, next){
  try {
    var id = new ObjectID(req.params.id);
  } catch (e) {
    return next(404);
  }
  User.findById(id, function(err, users) {
    if (err) return next(err);
    if (!users) {
      next(new HttpError(404, 'user not found'));
    } else {
    res.json(users);
    }
  });
  
}