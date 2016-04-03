var checkAuth = require('../middleware/checkAuth');

// описание стандартных маршрутов


module.exports = function(app) {
  app.get('/', require('./mainpage').get);
  app.get('/login', require('./login').get);
  app.post('/login', require('./login').post);
  app.post('/logout', require('./logout').post);
  app.post('/addnote', require('./addnote').post);
  app.post('/del', require('./del').post);
  app.get('/users', require('./users').get);
  app.get('/user/:id', require('./userid').get);
  app.get('/upload', checkAuth, require('./upload').get); //доступ разрешен только авторизованным пользователям
  app.post('/upload', checkAuth, require('./upload').post); //доступ разрешен только авторизованным пользователям

};
