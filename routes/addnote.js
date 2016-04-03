var database = require('../createdata');

exports.post = function(req, res, next) {
  var data = {'title': req.body.title, 'body': req.body.body};
  database.saveData(data, res, next);
  
  
}