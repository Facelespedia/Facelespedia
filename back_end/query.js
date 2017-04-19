var mysql      = require('mysql');

var connection;
  connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    database : 'facelespedia'
  });

  connection.connect(function(err) {
    if(err) {
      console.log('Error : ', err);
    }else {
      console.log('Database Connect');
    }
  });

  exports.getPlayer = function(callback){
    connection.query("SELECT * FROM Player",function(err, results,fields){
      if(!!err) console.log(err);
      var data  = {
        Player : results
      }
      callback(data);
    });
  }

  exports.getTeam = function(callback){
    connection.query("SELECT * FROM Team",function(err, results,fields){
      if(!!err) console.log(err);
      var data  = {
        Team : results
      }
      callback(data);
    });
  }

  exports.getHero = function(callback){
    connection.query("SELECT * FROM Hero",function(err, results,fields){
      if(!!err) console.log(err);
      var data  = {
        Hero : results
      }
      callback(data);
    });
  }

  exports.getHeroStat = function(callback){
    connection.query("SELECT * FROM HeroStat",function(err, results,fields){
      if(!!err) console.log(err);
      var data  = {
        person : results
      }
      callback(data);
    });
  }

  exports.getContinent = function(callback){
    connection.query("SELECT * FROM Continent",function(err, results,fields){
      if(!!err) console.log(err);
      var data  = {
        person : results
      }
      callback(data);
    });
  }

  exports.getContinentTeam = function(callback){
    connection.query("SELECT * FROM ContinentTeam",function(err, results,fields){
      if(!!err) console.log(err);
      var data  = {
        person : results
      }
      callback(data);
    });
  }

  exports.getContinentPlayer = function(callback){
    connection.query("SELECT * FROM ContinentPlayer",function(err, results,fields){
      if(!!err) console.log(err);
      var data  = {
        person : results
      }
      callback(data);
    });
  }

  exports.getTeamMember = function(callback){
    connection.query("SELECT * FROM TeamMember",function(err, results,fields){
      if(!!err) console.log(err);
      var data  = {
        person : results
      }
      callback(data);
    });
  }
