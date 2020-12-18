const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const config = require('./config');

// Passport
const passport = require('passport')
const jwt = require('jwt-simple')
const LocalStrategy = require('passport-local').Strategy
const BearerStrategy = require('passport-http-bearer')

// Express app
const app = express();

// View engine setup
app.set('views', path.join(__dirname + '/app', 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/**
 * SET UP PASSPORT
*/

// Bearer strategy to authenticate endpoints with bearer 
passport.use(new BearerStrategy(async (token, done) => {
  try {
      const { user } = jwt.decode(token, config.auth.secret);
      /**
       * Instead of calling DB for every request, we could store the user token in cache
       * until the user log out.
       */
      const userService = require('./app/services/users');
      const authUser = await userService.find(user.email);
      if (authUser.email === user.email) {
          return done(null, user);
      }

      return done(null, false);
  } catch (error) {
      done(null, false)
  }
}));

// Local Strategy (username, password)
passport.use(new LocalStrategy(
  { usernameField: 'email' }, // passport uses username and password authenticate user, however our app uses email, we alias it here
  async (email, password, done) => {
    const userService = require('./app/services/users');
    const user = await userService.find(email);
    if (!user) {
        console.error(`Invalid User or User not found`);
        return done(null, false)
    }

    if (email === user.email && password === user.password) {
        return done(null, user)
    }

  done(null, false)
}));

/**
 * tell passport how to serialise the user
 * Serialises user into session and determines which data of the user object should be stored in session.
 */
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

// Tell application to use passport as middleware
app.use(passport.initialize());

// View
const indexRouter = require('./app/routes/index');
app.use('/', indexRouter);

// API
app.use('/api', require('./app/http'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
