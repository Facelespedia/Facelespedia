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
app.get('/database/getTeamEurope',function(req,res) {
  var callback = function(data){
    res.send(data);
  };
  query.getTeamEurope(callback);
});
app.get('/database/getTeamAmerica',function(req,res) {
  var callback = function(data){
    res.send(data);
  };
  query.getTeamAmerica(callback);
});
app.get('/database/getTeamChina',function(req,res) {
  var callback = function(data){
    res.send(data);
  };
  query.getTeamChina(callback);
});
app.get('/database/getPlayerSortMMR',function(req,res) {
  var callback = function(data){
    res.send(data);
  };
  query.getPlayerSortMMR(callback);
});
app.get('/database/getPlayerSea',function(req,res) {
  var callback = function(data){
    res.send(data);
  };
  query.getPlayerSea(callback);
});
app.get('/database/getPlayerEurope',function(req,res) {
  var callback = function(data){
    res.send(data);
  };
  query.getPlayerEurope(callback);
});
app.get('/database/getPlayerAmerica',function(req,res) {
  var callback = function(data){
    res.send(data);
  };
  query.getPlayerAmerica(callback);
});
app.get('/database/getPlayerChina',function(req,res) {
  var callback = function(data){
    res.send(data);
  };
  query.getPlayerChina(callback);
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
app.listen(PORT , function(err) {
    if(!!err) {
      console.log(err);
    }else{
      console.log('Server connect , PORT : ' + PORT);
    }
});
