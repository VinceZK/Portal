// Create a expressjs app
const express = require('express');
const app = express();

// Register your Angular built files as static
const path = require('path');
app.use(express.static(path.join(__dirname, 'app')));
app.get('/logon', (req, res) => { // Open the logon page
  res.sendFile(path.join(__dirname, 'app/logon/index.html'));
});

// Register express-session middle ware with redis
const session = require('express-session');
const redisStore = require('connect-redis')(session);
app.use(session({
  name: 'sessionID',
  secret:'secretPortal',
  rolling: true,
  saveUninitialized: false,
  store: new redisStore(),
  unset: 'destroy',
  resave: false,
  cookie: {httpOnly: false, maxAge: 15 * 60 * 1000 }
}));

// Allow cross site requests and parse json
app.use(require('cors')());
app.use(require('body-parser').json());

// Register passport for authentication
const passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());

// Get the default router
const router = require('ui-logon').Router;
const jor = require('json-on-relations');
router.use(jor.Routes); // JOR Routes
router.get('/jor/*', (req, res) => { // Open the jor page
  res.sendFile(path.join(__dirname, 'app/jor/index.html'));
});
router.get('/portal/*', (req, res) => { // Open the portal page
  res.sendFile(path.join(__dirname, 'app/portal/index.html'));
});
router.get('*', (req, res) => { // The default index.html
  res.sendFile(path.join(__dirname, 'app/portal/index.html'));
});
app.use('/', router);

// Load the authentication logic with JSON-On-Relations
require('ui-logon').Authentication(jor);

require('./server/controller/identity_ctrl');
// Bootstrap the server
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => console.log('Example app listening on port 3000!'));
