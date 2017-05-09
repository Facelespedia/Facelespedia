var fs = require('fs');
var PORT = 3000;
var express = require('express');
var path = require('path');
var app = express();
var cors = require('cors')
var bodyParser = require('body-parser')
var query = require('./back_end/query.js');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
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
app.get('/database/getHeroStat',function(req,res) {
  var callback = function(data){
    res.send(data);
  };
  query.getHeroStat(callback);
});
app.get('/database/getContinent',function(req,res) {
  var callback = function(data){
    res.send(data);
  };
  query.getContinent(callback);
});
app.get('/database/getContinentTeam',function(req,res) {
  var callback = function(data){
    res.send(data);
  };
  query.getContinentTeam(callback);
});
app.get('/database/getContinentPlayer',function(req,res) {
  var callback = function(data){
    res.send(data);
  };
  query.getContinentPlayer(callback);
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
app.get('/database/getPlayerWithTeam',function(req,res) {
  var callback = function(data){
    res.send(data);
  };
  query.getPlayerWithTeam(callback);
});
app.get('/database/getStatsWin',function(req,res) {
  var callback = function(data){
    res.send(data);
  };
  query.getStatsWin(callback);
});
app.get('/database/getStatsPick',function(req,res) {
  var callback = function(data){
    res.send(data);
  };
  query.getStatsPick(callback);
});
app.get('/database/getStatsContest',function(req,res) {
  var callback = function(data){
    res.send(data);
  };
  query.getStatsContest(callback);
});
app.get('/database/getStatsBanned',function(req,res) {
  var callback = function(data){
    res.send(data);
  };
  query.getStatsBanned(callback);
});
app.get('/database/getStatsFirstPick',function(req,res) {
  var callback = function(data){
    res.send(data);
  };
  query.getStatsFirstPick(callback);
});
app.get('/database/getStatsFirstBanned',function(req,res) {
  var callback = function(data){
    res.send(data);
  };
  query.getStatsFirstBanned(callback);
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
