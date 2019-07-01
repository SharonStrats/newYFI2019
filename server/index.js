const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport'); //this runs the codes in that file


mongoose.connect(keys.mongoURI, {useNewUrlParser: true});
const app = express();  /* you can have more than one */

//allows an array of keys and picks a different one each time
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
);

//tell passport to use cookies
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

/* Route handler */
/*app.get('/', (req, res) => {
	res.send({hi: 'there'});
}); */

/* Dynamically configure port */
const PORT = process.env.PORT || 5000;
app.listen(PORT);
