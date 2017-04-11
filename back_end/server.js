var fs = require('fs');
var PORT = 3000;
var express = require('express');
var path = require('path');
var app = express();
var cors = require('cors')
var bodyParser = require('body-parser')
app.use(cors());
app.use(bodyParser.json());
var query = require('./query.js');

app.get('/', function(req,res) {
    res.sendFile('index.html',{root: path.join(__dirname,'../front_end')});
});
app.get('/database/getPersons',function(req,res) {
  var callback = function(data){
    res.send(data);
  };
  query.getPersons(callback);
}); 

app.listen(PORT , function(err) {
    if(!!err) {
      console.log(err);
    }else{
      console.log('Server connect');
    }
});

