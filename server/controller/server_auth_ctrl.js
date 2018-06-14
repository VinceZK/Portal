/**
 * Created by VinceZK on 5/27/18.
 */
const passport = require('passport');
const Authorization = require('node-authorization').Authorization;

passport.serializeUser(function (loginUser, done) {
  console.log('serialize the user in portal: ');
  done(null, loginUser);
},);

passport.deserializeUser(function (loginUser, done) {
  console.log('deserialize the user in portal');
  if(loginUser.userid && loginUser.userProfile)
    loginUser.Authorization = new Authorization(loginUser.userid, loginUser.userProfile);
  done(null, loginUser);
},);

module.exports = {
  logout: function (req, res) {
    console.log('begin logout!');
    if (req.user) {
      req.logout();
      res.status(200).end('Logout Successfully');
    } else {
      res.status(400).send('Not Logged in');
    }
  },

  ensureAuthenticated: function (req, res, next) {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.status(401).send('Unauthenticated!');
    }
  }
};

