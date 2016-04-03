var config = require('../config/index'),
    path = require('path'),
    mongoose = require('mongoose');

//подкючение mongoose

mongoose.connect(config().get('mongoose:uri'), config().get('mongoose:options'));

module.exports = mongoose;