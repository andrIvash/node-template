var mongoose = require('./libs/mongoose'),
    async = require('async');
    Note = require('./models/notes').Note;

// методы для работы с базой

function saveData (data, res, next) {
  var note = new mongoose.models.Note({
    title: data.title,
    body: data.body,
    filename: data.filename
  });
  try {
    note.save();
  } catch (e) {
    return next(err);
  }

};

function removeData (res, next) {
  mongoose.connection.db.dropCollection('notes', function(err, result) {
    if (err) return next(err);
    
  });
  console.log('collection dropped')
   res.writeHead(200, {"Content-Type": "text/plain"});
   res.end('ok');
}


exports.saveData = saveData;
exports.removeData = removeData;
