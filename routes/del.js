var database = require('../createdata');

exports.post = function(req, res, next) {
  database.removeData(res, next);
  
}