var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var methodOverride = require('method-override');

// MongoDB Models
var db = require('./model/db');
var User = require('./model/users.js');
var Division = require('./model/divisions.js');

// Routes
var routes = require('./routes/index');
var api = require('./routes/api');

/*
 * Authentication with facebook
 */
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var facebookConfig = require('./config/facebook_config');


passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    if(err)
      done(err, null)
    else
      done(null, user);
  });
});

// Use the FacebookStrategy within Passport.
passport.use(new FacebookStrategy({
    clientID: facebookConfig.facebook_api_key,
    clientSecret: facebookConfig.facebook_api_secret,
    callbackURL: facebookConfig.callback_url,
    profileFields: ['id', 'displayName', 'photos', 'age_range']
  },
  function(accessToken, refreshToken, profile, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {
      User.findOne({facebookId: profile.id}, function(err, user) {
        if(err)
          done(err);
        if(!user) {
          var newUser = User({
            name: profile.displayName,
            accessToken: accessToken,
            facebookId: profile.id,
            minAge: profile._json['age_range'].min,
            image: profile.photos[0].value,
          });
          newUser.save(function(err) {
            if(err)
              done(err);
            else
              done(null, newUser);
          });
        } else {
          return done(null, user);
        }
      });
    });
  }
));

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// For passport sessions to work, the following is required
app.use(session({secret: 'ge2015'}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', routes);
app.use('/api', api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
