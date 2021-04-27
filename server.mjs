// Create a expressjs app
import express from 'express';
const app = express();

// Register your Angular built files as static
import * as path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'app')));
app.get('/', (req, res) => { // Open the logon page
  res.sendFile(path.join(__dirname, 'app/identification/index.html'));
});

// Register express-session middle ware with redis
import session from 'express-session';
import connectRedis from 'connect-redis';
const redisStore = connectRedis(session);
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
import cors from 'cors';
import compression from 'compression';
app.use(cors());
app.use(express.json());
app.use(compression());

// Register passport for authentication
import passport from 'passport';
app.use(passport.initialize());
app.use(passport.session());

// Get the default router
import {Router as router, Identification as identification} from 'ui-logon';
import * as jor from 'json-on-relations';
import { Scheduler, router as jobRoutes } from 'node-background-job';
router.use(jor.Routes); // JOR Routes
router.use(jobRoutes); // Job Routes
router.get('/identification/*', (req, res) => { // Open the portal page
  res.sendFile(path.join(__dirname, 'app/identification/index.html'));
});
router.get('/jor/*', (req, res) => { // Open the jor page
  res.sendFile(path.join(__dirname, 'app/jor/index.html'));
});
router.get('/portal/*', (req, res) => { // Open the portal page
  res.sendFile(path.join(__dirname, 'app/portal/index.html'));
});
router.get('/job/*', (req, res) => { // Open the portal page
  res.sendFile(path.join(__dirname, 'app/job/index.html'));
});
router.get('*', (req, res) => { // The default index.html
  res.sendFile(path.join(__dirname, 'app/portal/index.html'));
});
app.use('/', router);

// Load the authentication logic with JSON-On-Relations
identification.Authentication(jor);

import * as identifyCtrl from './server/controller/identity_ctrl.js';
import * as permissionCtrl from './server/controller/permission_ctrl.js';
import TestProgram from "./server/jobPrograms/testProgram.mjs";

// Bootstrap the server
Scheduler.getPreviousPIDs()
  .catch( errors => console.error(errors))
  .then((prevNumNodes) => {
    process.env.previousPID = Scheduler.previousPIDs[0];
    process.env.JOB_SERVER = 'Darkhouse';
    process.env.USE_DB = 'true';
    Scheduler.on()
      .then( () => {app.listen(process.env.PORT || 3000, () => console.log('Example app listening on port 3000!'));})
      .catch( error => console.error(`PID ${process.pid}: `, error.message || error));
  });

