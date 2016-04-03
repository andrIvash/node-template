var User = require('../models/users').User,
    HttpError = require('../error/').HttpError,
    AuthError = require('../models/users').AuthError,
    async = require('async');

exports.get = function(req, res) {
  res.render('login', {
    title: 'Login',
    message: 'Login Form'
  });
  
};

exports.post = function(req, res, next) {
  var username = req.body.name;
  var password = req.body.password;
  
  User.authorize(username, password, function(err, user) {
    if (err) {
      if (err instanceof AuthError) {
        return next(new HttpError(403, err.message));
      } else {
        return next(err);
      }
    }
    req.session.user = user._id;
    res.send({
      status: 'OK',
      mes: 'Welcome ' + user.username
    });
  });
  // async.waterfall([
  //   function(callback) {
  //     User.findOne({username: username}, callback);      
  //   },
  //   function(user, callback) {
  //     if (!user) {
  //       next(new HttpError(404, 'user not found'));
  //     } else {
  //       callback(null, user);
  //     }
  //   }
  // ], function(err, user) {
  //   if (err) return next(err);
  //   req.session.user = user._id;
  //   res.send({
  //     status: 'OK',
  //     mes: 'Welcome ' + user.username
  //   });
  // });
};





// exports.get = function(req, res, next){
//   try {
//     var id = new ObjectID(req.params.id);
//   } catch (e) {
//     return next(404);
//   }
//   User.findById(id, function(err, users) {
//     if (err) return next(err);
//     if (!users) {
//       next(new HttpError(404, 'user not found'));
//     } else {
//     res.json(users);
//     }
//   });
  
// }