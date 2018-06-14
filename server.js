const express = require('express');
const session = require('express-session');
const redisStore = require('connect-redis')(session);
const passport = require('passport');
const compress = require('compression');
const path = require('path');

const app = express();

// We don't want to serve sessions for static resources
app.use(express.static(path.join(__dirname, 'dist')));

app.use(session({
  name: 'sessionID',
  secret:'darkhouse',
  saveUninitialized: false,
  store: new redisStore(),
  unset: 'destroy', //Only for Redis session store to logout the session
  resave: false,
  cookie: {httpOnly: false }
}));
app.use(require('cookie-parser')());
app.use(passport.initialize());
app.use(passport.session());
app.use(compress());

// Routing
const routes = require('./server/server_routes');
app.use('/', routes);

app.listen(3001, () => console.log('Example app listening on port 3001!'));
