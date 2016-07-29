var mongoose = require('mongoose');
var mongoURL = require('../config/mongo_config').url;
mongoose.connect(mongoURL);