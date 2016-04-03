var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// описание схемы вводимых данных 
var schema = new Schema({
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true,
    },
    filename: {
      type: String,
      required: false,
    },
    created: {
      type: Date,
      default: Date.now
    }
});



exports.Note = mongoose.model('Note', schema);
