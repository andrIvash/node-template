var mongoose = require('./libs/mongoose');
var   async = require('async');
var User = require('./models/users').User;

// module.exports = function($) {
//   function open(callback) {
//   $.mongoose.connection.on('open', callback);
//   console.log('подключились');
// };

// function dropDatabase(callback) {
//   console.log('очищаем таблицу');
//   var db = $.mongoose.connection.db;
//   db.dropDatabase(callback);
// };

// function requireModels(callback) {
//   require('./models/users');
//   $.async.each(Object.keys($.mongoose.models), function(modelName, callback) {
//     $.mongoose.models[modelName].ensureIndexes(callback);
//   }, callback);
// };

// function createUsers(callback) {
//   console.log('вставляем данные');
//   var users = [
//     {username: 'Petya', tasksum: 3},
//     {username: 'Ivan', tasksum: 2}
//   ];
//   $.async.each(users, function(userData, callback) {
//     var user = new $.mongoose.models.User(userData);
//     user.save(callback);
//   }, callback);
// }; 






//    return $.async.series([
//           open,
//           dropDatabase,
//           requireModels,
//           createUsers
          
//         ], function(err) {
//           console.log('Закрываем');
//           console.log(arguments);
//           $.mongoose.disconnect();
//           process.exit(err ? 255 : 0);
//         });
// };


async.series([
  open,
  dropDatabase,
  requireModels,
  createUsers
  
], function(err) {
  console.log('Закрываем');
  console.log(arguments);
  mongoose.disconnect();
  process.exit(err ? 255 : 0);
});

function open(callback) {
  mongoose.connection.on('open', callback);
  console.log('подключились');
};

function dropDatabase(callback) {
  console.log('очищаем таблицу');
  var db = mongoose.connection.db;
  db.dropDatabase(callback);
};

function requireModels(callback) {
  require('./models/users');
  async.each(Object.keys(mongoose.models), function(modelName, callback) {
    mongoose.models[modelName].ensureIndexes(callback);
  }, callback);
};

function createUsers(callback) {
  console.log('вставляем данные');
  var users = [
    {username: 'Vasya', tasksum: 3},
    {username: 'Ivan', tasksum: 2}
  ];
  async.each(users, function(userData, callback) {
    var user = new mongoose.models.User(userData);
    user.save(callback);
  }, callback);
}; 


