var express = require('express');
var router = express.Router();
var passport = require('passport');
var facebook = require('../public/javascripts/vendor/facebook/facebook.js');
var Division = require('../model/divisions.js');

/* GET welcome page. */
router.get('/welcome', function(req, res){
  res.render('welcome');
});

router.get('/result/:name', function(req, res){
  var divisionName = decodeURI(req.params.name);
  console.log(req.user)

  // facebook.getFbData('1474451976210615|4uxj4pFeBJTM5kVo4PQ2Y-Ko_4Y', '/me/friends', function(data){
  //   console.log(data);
  //   res.render('result', {series: data, name: divisionName});
  // });
});

router.get('/vote/:name', function(req, res){
  var divisionName = decodeURI(req.params.name);
  Division.findOne({divisionName: divisionName}, function(err, data) {
  if(err)
    res.status(500).render('500', {message: 'Internal Server Error'});
  else
    if(data) {
      data['voters'] = null;
      for(var i=0;i<data['parties'].length;i++) {
        data['parties'][i].vote = null; // remove voting data
      }
      req.session.lastPage = '/vote/' + divisionName;
      res.render('vote', {data: data, user: req.user});
    }
    else
      res.status(404).render('404', {error: 'Constituency not found'});
  });
});

router.get('/', function(req, res, next) {
    // res.cookie('first-time', '1', {maxAge: 3000, minAge: 3000});
    // console.log('cookies', req.cookies);
    res.render('main');
});

// GET /auth/facebook
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Facebook authentication will involve
//   redirecting the user to facebook.com.  After authorization, Facebook will
//   redirect the user back to this application at /auth/facebook/callback
router.get('/auth/facebook', passport.authenticate('facebook', {scope: ['user_friends', 'public_profile']}), function(req, res){
    // The request will be redirected to Facebook for authentication, so this
    // function will not be called.
});

// GET /auth/facebook/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
router.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), function(req, res) {
    if(req.session.lastPage) {
      var redirectTo = req.session.lastPage;
      delete req.session.lastPage;
      res.redirect(redirectTo);
    } else  {
      res.redirect('/');
    }
});

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/welcome');
});

// Simple route middleware to ensure user is authenticated.
//   Use this route middleware on any resource that needs to be protected.  If
//   the request is authenticated (typically via a persistent login session),
//   the request will proceed.  Otherwise, the user will be redirected to the
//   login page.
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/welcome')
}

module.exports = router;
