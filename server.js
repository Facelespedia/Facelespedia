var fs = require('fs');
var PORT = 3000;
var express = require('express');
var path = require('path');
var app = express();
var cors = require('cors')
var bodyParser = require('body-parser')
var routes = require('./routes/index')

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));
var query = require('./back_end/query.js');

app.use("/",routes);

// app.get('/', function(req,res) {
//     res.sendFile('index.html',{root: path.join(__dirname,'front_end')});
// });
// app.get('/landing', function(req,res) {
//     res.sendFile('landing.html',{root: path.join(__dirname,'front_end')});
// });
app.get('/database/getPersons',function(req,res) {
  var callback = function(data){
    res.send(data);
  };
  query.getPersons(callback);
});
// app.get('/OGTeam.html',function(req,res) {
//   res.sendFile('OGTeam.html',{root: path.join(__dirname,'front_end')});
// });
app.listen(PORT , function(err) {
    if(!!err) {
      console.log(err);
    }else{
      console.log('Server connect');
    }
});

