var HttpError = require('../error').HttpError;

//проверка сессии

module.exports = function(req, res, next) {
  if (!req.session.user) {
    return next(new HttpError(401, "You not authorize yet"));
  }
  next();
};