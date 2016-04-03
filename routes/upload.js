var database = require('../createdata');


var mime = require('mime-types');
var multer  =   require('multer');
var HttpError = require('../error/').HttpError;
 var storage =   multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, './public/uploads');
    },
    filename: function (req, file, callback) {
      callback(null, file.fieldname + '-' + Date.now() + '.' + mime.extension(file.mimetype));
    }
  });


exports.post = function(req, res, next) {
 
  var upload = multer({ storage : storage}).single('photo');
  

  upload(req, res, function(err) {
    if(err) { 
      return next(new HttpError(404, 'error loading file'));
    }
    var data = {
      'title': req.body.title, 
      'body': req.body.body,
      'filename': req.file.filename
    };
    console.log(req.body.title);
    console.log(req.body.body);
    console.log(req.file);
    database.saveData(data, res, next);
    res.end("File is uploaded");

  });
 
}

exports.get = function(req, res) {
  
  res.render('upload', {
    title: 'Upload',
    message: 'Hello everybody !'
      
  });
  
};
