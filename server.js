var fs = require('fs');
var PORT = 3000;
var express = require('express');
var path = require('path');
var app = express();
var cors = require('cors')
var bodyParser = require('body-parser')
var query = require('./back_end/query.js');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());
app.get('/database/getPlayer',function(req,res) {
  var callback = function(data){
    res.send(data);
  };
  query.getPlayer(callback);
});
app.get('/database/getTeam',function(req,res) {
  var callback = function(data){
    res.send(data);
  };
  query.getTeam(callback);
});
app.get('/database/getHero',function(req,res) {
  var callback = function(data){
    res.send(data);
  };
  query.getHero(callback);
});
app.get('/database/getContinent',function(req,res) {
  var callback = function(data){
    res.send(data);
  };
  query.getContinent(callback);
});
app.get('/database/getTeamSortRating',function(req,res) {
  var callback = function(data){
    res.send(data);
  };
  query.getTeamSortRating(callback);
});
app.get('/database/getPlayerSortMMR',function(req,res) {
  var callback = function(data){
    res.send(data);
  };
  query.getPlayerSortMMR(callback);
});
app.post('/database/getPlayerSort',function(req,res) {
  var callback = function(data){
    res.status(200).send(data);
  };
  query.getPlayerSortMMR(callback,req.body);
});
app.get('/database/getPlayerWithTeam',function(req,res) {
  var callback = function(data){
    res.send(data);
  };
  query.getPlayerWithTeam(callback);
});
app.post('/database/getStats',function(req,res) {
  var callback = function(data){
    res.status(200).send(data);
  };
  query.getStats(callback,req.body);
});
app.get('/database/getBoston',function(req,res) {
  var callback = function(data){
    res.send(data);
  };
  query.getBoston(callback);
});
app.get('/database/getKiev',function(req,res) {
  var callback = function(data){
    res.send(data);
  };
  query.getKiev(callback);
});
app.get('/database/getTi6',function(req,res) {
  var callback = function(data){
    res.send(data);
  };
  query.getTi6(callback);
});
app.get('/database/getManilla',function(req,res) {
  var callback = function(data){
    res.send(data);
  };
  query.getManilla(callback);
});
app.get('/database/getHeroMost',function(req,res) {
  var callback = function(data){
    res.send(data);
  };
  query.getHeroMost(callback);
});
app.post('/database/postPlayer',function(req,res) {
  var callback = function(data) {
    res.send(data);
  }
  query.postPlayer(callback,req.body);
});
app.post('/database/postTeam',function(req,res) {
  var callback = function(data) {
    res.send(data);
  }
  query.postTeam(callback,req.body);
});
app.post('/database/postPlayerWithTeam',function(req,res) {
  var callback = function(data) {
    res.send(data);
  }
  query.postPlayerWithTeam(callback,req.body);
});
app.post('/database/postHero',function(req,res) {
  var callback = function(data) {
    res.send(data);
  }
  query.postHero(callback,req.body);
});

app.listen(PORT , function(err) {
    if(!!err) {
      console.log(err);
    }else{
      console.log('Server connect , PORT : ' + PORT);
    }
});
