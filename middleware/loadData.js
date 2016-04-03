var Note = require('../models/notes').Note;

// вывод всех данных из коллекции базы

module.exports = function(req, res, next) {
  Note.find({}, function(err, notes) {
    if (err) return next(err);
    req.notes = res.locals.notes = notes;
    next();
  });
};

