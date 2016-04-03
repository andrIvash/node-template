var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    util = require('util');

// описание схемы для добавления пользователя

var schema = new Schema({
    username: {
      type: String,
      unique: true,
      required: true
    },
    tasksum: {
      type: Number,
      required: true,
      default: 0
    },
    created: {
      type: Date,
      default: Date.now
    }
});


schema.methods.checkData = function(taskConst) {
  if (this.tasksum == taskConst ) {
    console.log(this.username + 'is passing all tasks');
  }
};

schema.statics.authorize = function(username, password, callback) {
  var User = this;
  async.waterfall([
    function(callback) {
      User.findOne({username: username}, callback);      
    },
    function(user, callback) {
      console.log(user);
      if (!user) {
        callback(new AuthError('user not found'));
      } else {
        callback(null, user);
      }
    }
  ], callback);
};

exports.User = mongoose.model('User', schema);


// ошибка авторизации
function AuthError(message) {
  Error.apply(this, arguments);
  Error.captureStackTrace(this, AuthError);

  this.message = message;
}

util.inherits(AuthError, Error);

AuthError.prototype.name = "AuthError";
exports.AuthError = AuthError;

