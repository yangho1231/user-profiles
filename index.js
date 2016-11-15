var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var session = require('express-session');
var config = require('./config.js');
var profileCtrl = require('./controllers/profileCtrl.js');
var userCtrl = require('./controllers/userCtrl.js');

var app = express();
var corsOptions = {
    origin: 'http://localhost:3000'
};

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(session({
    secret: config.sessionSecret,
    saveUninitialized: false,
    resave: false

  }));
app.use(express.static(__dirname + '/public'));

app.post('/api/login', userCtrl.login);
app.get('/api/profiles', profileCtrl.friends);







app.listen(3000, function() {
  console.log("I am listening");
});
