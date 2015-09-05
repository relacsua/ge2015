var express = require('express');
var router = express.Router();
var passport = require('passport');
var facebook = require('../public/javascripts/vendor/facebook/facebook.js');
var ObjectId = require('mongoose').Types.ObjectId; 
var Division = require('../model/divisions.js');
var User = require('../model/users.js');

/* GET welcome page. */
router.get('/welcome', function(req, res){
  var error = req.session.error;
  delete req.session.error;
  res.render('welcome');
});

router.get('/result/:name', ensureAuthenticated, function(req, res){
  var divisionName = decodeURI(req.params.name);
  console.log(req.user)

  // facebook.getFbData('1474451976210615|4uxj4pFeBJTM5kVo4PQ2Y-Ko_4Y', '/me/friends', function(data){
  //   console.log(data);
  //   res.render('result', {series: data, name: divisionName});
  // });
});

router.get('/vote/:name', function(req, res, next) {
  var divisionName = decodeURI(req.params.name);
  Division.findOne({divisionName: divisionName}, function(err, data) {
    if(err) {
      var err = new Error('Internal Server Error');
      next(err);
    } else {
      if(data) {
        data['voters'] = null;
        for(var i=0;i<data['parties'].length;i++) {
          data['parties'][i].vote = null; // remove voting data
        }
        req.session.lastPage = '/vote/' + divisionName;
        var error = req.session.error;
        delete req.session.error;
        res.render('vote', {data: data, user: req.user, error: error});
      } else {
        var err = new Error('Constituency Not Found');
        err.status = 404;
        next(err);
      }
    }
  });
});

router.post('/vote/:id', ensureAuthenticated, function (req, res, next) {
  if(ObjectId.isValid(req.params.id))
    next();
  else {
    req.session.error = "Invalid User";
    res.redirect('/logout');
  }
});

// Updates the division and party data
// if the input is valid
router.post('/vote/:id', function(req, res, next) {
  var body = req.body;
  var divisionName = body.divisionName;
  var party = body.party;
  var redirectTo = req.session.lastPage;
  Division.findOne({divisionName: divisionName}, function (err, division) {
    if(err) {
      req.session.error = 'Internal Server Error';
      res.redirect(redirectTo);
    } else {
      if(!division) {
        req.session.error = 'Constituency not found';
        res.redirect(redirectTo);
      } else {
        var partyFound = false;
        for(var i=0; i<division.parties.length && !partyFound; i++) {
          if(division.parties[i].name === party) {
            var partyFoundAtIndex = i;
            partyFound = true;
            User.findById(new ObjectId(req.params.id), function(err, user) {
              if(err) {
                req.session.error = 'Internal Server Error';
                res.redirect(redirectTo);
              } else {
                if(user) {
                  if(user.vote.division) {
                    req.session.error = 'You have already voted.';
                    res.redirect(redirectTo);
                  } else {
                    division.parties[partyFoundAtIndex].votes[user.minAge.toString()] += 1;
                    division.save(function (err) {
                      if(err) {
                        req.session.error = 'Internal Server Error';
                        res.redirect(redirectTo); 
                      } else {
                        next();
                      }
                    });
                  }
                } else {
                  req.session.error = "User not found";
                  res.redirect('/logout');
                }
              }
            });
          }
        }
        if(!partyFound) {
          req.session.error = 'Party not found';
          res.redirect(redirectTo); 
        }
      }
    }
  });
});

router.post('/vote/:id', function(req, res) {
  var body = req.body;
  var divisionName = body.divisionName;
  var party = body.party;
  var redirectTo = req.session.lastPage;
  User.findById(new ObjectId(req.params.id), function(err, user) {
    if(err) {
      req.session.error = 'Internal Server Error';
      res.status(500).redirect(redirectTo);
    } else {
      if(user) {
        if(user.vote.division) {
          req.session.error = 'You have already voted.';
          res.redirect(redirectTo);
        } else {
          user.vote.division = divisionName;
          user.vote.party = party;
          user.save(function (err) {
            if(err) {
              req.session.error = 'Internal Server Error'
              res.redirect(redirectTo);
            } else {
              res.redirect('/result');
            }
          });
        }
      } else {
        req.session.error = 'User not found'
        res.redirect('/logout');
      }
    }
  });
});

router.get('/', function(req, res, next) {
    req.session.lastPage = '/';
    res.render('main');
});

router.get('/auth/facebook', passport.authenticate('facebook', {scope: ['user_friends', 'public_profile']}), function(req, res){
    // The request will be redirected to Facebook for authentication, so this
    // function will not be called.
});

router.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), function(req, res) {
    if(req.session.lastPage) {
      var redirectTo = req.session.lastPage;
      delete req.session.lastPage;
      res.redirect(redirectTo);
    } else  {
      res.redirect('/');
    }
});

router.get('/logout', function(req, res) {
  delete req.session.lastPage;
  req.logout();
  res.redirect('/welcome');
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { 
    return next(); }
  res.redirect('/welcome')
}

module.exports = router;