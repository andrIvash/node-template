//экспортируем настройки
 var nconf = require('nconf'),
     path = require('path');

 module.exports = function() {
   return nconf.argv()
          .env()
          .file({file: path.join(__dirname, 'config.json')})
};
