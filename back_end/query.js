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
      HeroStat : results
    }
    callback(data);
  });
}

  exports.getPlayer = function(callback){
    connection.query("SELECT * FROM Player",function(err, results,fields){
      if(!!err) console.log(err);
      var data  = {
        Player : results
      }
      callback(data);
    });
  }

  exports.getContinent = function(callback){
    connection.query("SELECT * FROM Continent",function(err, results,fields){
      if(!!err) console.log(err);
      var data  = {
        Continent : results
      }
      callback(data);
    });
  }

  exports.getContinentTeam = function(callback){
    connection.query("SELECT * FROM ContinentTeam",function(err, results,fields){
      if(!!err) console.log(err);
      var data  = {
        ContinentTeam : results
      }
      callback(data);
    });
  }

  exports.getContinentPlayer = function(callback){
    connection.query("SELECT * FROM ContinentPlayer",function(err, results,fields){
      if(!!err) console.log(err);
      var data  = {
        ContinentPlayer : results
      }
      callback(data);
    });
  }

  exports.getTeamMember = function(callback){
    connection.query("SELECT * FROM TeamMember",function(err, results,fields){
      if(!!err) console.log(err);
      var data  = {
        TeamMember : results
      }
      callback(data);
    });
  }

  exports.getTeamSortRating = function(callback){
    connection.query("SELECT * FROM Team ORDER BY Rating DESC"
    ,function(err, results,fields){
      if(!!err) console.log(err);
      var data  = {
        TeamSortRating : results
      }
      callback(data);
    });
  }

  exports.getTeamSea = function(callback){
    connection.query("SELECT * FROM Team where TeamID IN(select TeamID from ContinentTeam where ContinentID = 1)ORDER BY Rating DESC"
    ,function(err, results,fields){
      if(!!err) console.log(err);
      var data  = {
        TeamSea : results
      }
      callback(data);
    });
  }

   exports.getTeamEurope = function(callback){
    connection.query("SELECT * FROM Team where TeamID IN(select TeamID from ContinentTeam where ContinentID = 2)ORDER BY Rating DESC"
    ,function(err, results,fields){
      if(!!err) console.log(err);
      var data  = {
        TeamEurope : results
      }
      callback(data);
    });
  }

   exports.getTeamAmerica = function(callback){
    connection.query("SELECT * FROM Team where TeamID IN(select TeamID from ContinentTeam where ContinentID = 3)ORDER BY Rating DESC"
    ,function(err, results,fields){
      if(!!err) console.log(err);
      var data  = {
        TeamAmerica : results
      }
      callback(data);
    });
  }

   exports.getTeamChina = function(callback){
    connection.query("SELECT * FROM Team where TeamID IN(select TeamID from ContinentTeam where ContinentID = 4)ORDER BY Rating DESC"
    ,function(err, results,fields){
      if(!!err) console.log(err);
      var data  = {
        TeamChina : results
      }
      callback(data);
    });
  }

  exports.getPlayerSortMMR = function(callback){
    connection.query("SELECT * FROM Player ORDER BY MMR DESC"
    ,function(err, results,fields){
      if(!!err) console.log(err);
      var data  = {
        PlayerSortMMR : results
      }
      callback(data);
    });
  }

  exports.getPlayerSea = function(callback){
    connection.query("SELECT * FROM Player where PlayerID IN(select PlayerID from ContinentPlayer where ContinentID = 1)ORDER BY Rating DESC"
    ,function(err, results,fields){
      if(!!err) console.log(err);
      var data  = {
        PlayerSea : results
      }
      callback(data);
    });
  }

  exports.getPlayerEurope = function(callback){
    connection.query("SELECT * FROM Player where PlayerID IN(select PlayerID from ContinentPlayer where ContinentID = 2)ORDER BY Rating DESC"
    ,function(err, results,fields){
      if(!!err) console.log(err);
      var data  = {
        PlayerEurope : results
      }
      callback(data);
    });
  }

  exports.getPlayerAmerica = function(callback){
    connection.query("SELECT * FROM Player where PlayerID IN(select PlayerID from ContinentPlayer where ContinentID = 3)ORDER BY Rating DESC"
    ,function(err, results,fields){
      if(!!err) console.log(err);
      var data  = {
        PlayerAmerica : results
      }
      callback(data);
    });
  }

  exports.getPlayerChina = function(callback){
    connection.query("SELECT * FROM Player where PlayerID IN(select PlayerID from ContinentPlayer where ContinentID = 4)ORDER BY Rating DESC"
    ,function(err, results,fields){
      if(!!err) console.log(err);
      var data  = {
        PlayerChina : results
      }
      callback(data);
    });
  }