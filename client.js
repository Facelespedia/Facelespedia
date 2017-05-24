var fs = require('fs');
var PORT = 3001;
var express = require('express');
var path = require('path');
var app = express();
var cors = require('cors')
var bodyParser = require('body-parser')
var routes = require('./routes/index')
var dashboard = require('./routes/dashboard')
var login = require('./routes/login')

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));
app.use('/',routes);
app.use('/1fac591789e10cb96632bc21bcf87e9edbaddbe9aa0125278c2fa8c61d1e560al',dashboard);
app.use('/admin',login);


app.listen(PORT , function(err) {
    if(!!err) {
      console.log(err);
    }else{
      console.log('Client connect , PORT : ' + PORT);
    }
});
