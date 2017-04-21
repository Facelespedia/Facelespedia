var fs = require('fs');
var PORT = 3001;
var express = require('express');
var path = require('path');
var app = express();
var cors = require('cors')
var bodyParser = require('body-parser')
var routes = require('./routes/index')
var team_card = require('./routes/team_card')

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));
app.use('/',routes);
app.use('/team_card',team_card);

app.listen(PORT , function(err) {
    if(!!err) {
      console.log(err);
    }else{
      console.log('Client connect , PORT : ' + PORT);
    }
});
