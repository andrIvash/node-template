exports.get = function(req, res) {
  
  res.render('index', {
    title: 'World',
    message: 'Hello everybody !'
      
  });
  
};

