const dotenv = require('dotenv');
const express = require('express');
dotenv.config();

const session = require('express-session');

const router = require('./app/router');

const app = express();

const sessionConfig = {
  secret: "je peux mettre ici ce que je veux mais plus c'est long et mieux ce sera",
  cookie: {},
  resave: false,
  saveUninitialized: true
}

app.use(session(sessionConfig));

app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.use(router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
