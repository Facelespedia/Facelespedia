var fs = require('fs');
var PORT = 3000;
var express = require('express');
var path = require('path');
var app = express();
var cors = require('cors')
var bodyParser = require('body-parser')
var query = require('./back_end/query.js');
app.use(cors());
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
app.get('/database/getTeamMember',function(req,res) {
  var callback = function(data){
    res.send(data);
  };
  query.getTeamMember(callback);
});
app.get('/database/getTeamSortRating',function(req,res) {
  var callback = function(data){
    res.send(data);
  };
  query.getTeamSortRating(callback);
});
app.get('/database/getTeamSea',function(req,res) {
  var callback = function(data){
    res.send(data);
  };
  query.getTeamSea(callback);
});
app.listen(PORT , function(err) {
    if(!!err) {
      console.log(err);
    }else{
      console.log('Server connect');
    }
});
