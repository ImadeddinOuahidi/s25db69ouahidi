var express = require('express');
var passport = require('passport');
var router = express.Router();
var Account = require('../models/account');

router.get('/', function (req, res) {
  res.render('index', { title: 'Insect App', user: req.user });
});

router.get('/register', function (req, res) {
  res.render('register', { title: 'Insect App Registration', message: '' });
});

router.post('/register', function (req, res) {
  Account.findOne({ username: req.body.username })
    .then(function (user) {
      if (user != null) {
        console.log("User exists: " + req.body.username);
        return res.render('register', {
          title: 'Registration',
          message: 'Existing User',
          account: req.body.username
        });
      }

      let newAccount = new Account({ username: req.body.username });
      Account.register(newAccount, req.body.password, function (err, user) {
        if (err) {
          console.log("Registration error: " + err);
          return res.render('register', {
            title: 'Registration',
            message: 'Access error',
            account: req.body.username
          });
        }
        console.log('Success, redirect');
        res.redirect('/');
      });
    })
    .catch(function (err) {
      return res.render('register', {
        title: 'Registration',
        message: 'Registration error',
        account: req.body.username
      });
    });
});

router.get('/login', function (req, res) {
  res.render('login', { title: 'Insect App Login', user: req.user, message: '' });
});

router.post('/login', passport.authenticate('local'), function (req, res) {
  res.redirect('/');
});

router.get('/logout', function (req, res, next) {
  req.logout(function (err) {
    if (err) return next(err);
    res.redirect('/');
  });
});

router.get('/ping', function (req, res) {
  res.status(200).send("pong!");
});

module.exports = router;
