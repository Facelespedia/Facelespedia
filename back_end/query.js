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

  exports.getHero = function(callback){
    connection.query("SELECT * FROM Hero",function(err, results,fields){
      if(!!err) console.log(err);
      var data  = {
        Hero : results
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


  exports.getTeamSortRating = function(callback){
    connection.query("SELECT * FROM Team ORDER BY Rating DESC",function(err, results,fields){
      if(!!err) console.log(err);
      var data  = {
        TeamSortRating : results
      }
      callback(data);
    });
  }

  exports.getPlayerSortMMR = function(callback){
    connection.query("SELECT * FROM Player ORDER BY MMR DESC",function(err, results,fields){
      if(!!err) console.log(err);
      var data  = {
        PlayerSortMMR : results
      }
      callback(data);
    });
  }


   exports.getPlayerWithTeam = function(callback){
    connection.query("SELECT Team.TeamID,GameName FROM Player,TeamMember,Team where Player.PlayerID = TeamMember.PlayerID && Team.TeamID = TeamMember.TeamID"
    ,function(err, results,fields){
      if(!!err) console.log(err);
      var data  = {
         PlayerWithTeam : results
       }
       callback(data);
     });
   }

  exports.getStatsWin = function(callback){
    connection.query("SELECT Hero.HeroID,HeroName,Winratepercent FROM HeroStat,Hero Where Hero.HeroID = HeroStat.HeroID ORDER BY Winratepercent DESC",function(err, results,fields){
      if(!!err) console.log(err);
      var data  = {
        StatsWin : results
      }
      callback(data);
    });
  }

  exports.getStatsPick = function(callback){
    connection.query("SELECT Hero.HeroID,HeroName,PercentPick FROM HeroStat,Hero Where Hero.HeroID = HeroStat.HeroID ORDER BY PercentPick DESC",function(err, results,fields){
      if(!!err) console.log(err);
      var data  = {
        StatsPick : results
      }
      callback(data);
    });
  }

  exports.getStatsContest = function(callback){
    connection.query("SELECT Hero.HeroID,HeroName,PercentContest FROM HeroStat,Hero Where Hero.HeroID = HeroStat.HeroID ORDER BY PercentContest DESC",function(err, results,fields){
      if(!!err) console.log(err);
      var data  = {
        StatsContest : results
      }
      callback(data);
    });
  }

  exports.getStatsBanned = function(callback){
    connection.query("SELECT Hero.HeroID,HeroName,PercentBanned FROM HeroStat,Hero Where Hero.HeroID = HeroStat.HeroID ORDER BY PercentBanned DESC",function(err, results,fields){
      if(!!err) console.log(err);
      var data  = {
        StatsBanned : results
      }
      callback(data);
    });
  }

  exports.getStatsFirstPick = function(callback){
    connection.query("SELECT Hero.HeroID,HeroName,PercentFirstPick FROM HeroStat,Hero Where Hero.HeroID = HeroStat.HeroID ORDER BY PercentFirstPick DESC",function(err, results,fields){
      if(!!err) console.log(err);
      var data  = {
        StatsFirstPick : results
      }
      callback(data);
    });
  }

  exports.getStatsFirstBanned = function(callback){
    connection.query("SELECT Hero.HeroID,HeroName,PercentFirstBanned FROM HeroStat,Hero Where Hero.HeroID = HeroStat.HeroID ORDER BY PercentFirstBanned DESC",function(err, results,fields){
      if(!!err) console.log(err);
      var data  = {
        StatsFirstBanned : results
      }
      callback(data);
    });
  }



  exports.postPlayer = function(callback , info){
    if(info.TYPE == 'add') {
      connection.query("INSERT INTO Player VALUES ("+info.PlayerID+",\""+info.PlayerName+"\",\""+info.GameName+"\",\""+info.MMR+"\",\""+info.Nation+"\","+info.Winrate+")",function(err, results,fields){
        if(!!err) console.log(err);
      });
      connection.query("INSERT INTO ContinentPlayer SELECT ContinentID,PlayerID FROM Continent,Player WHERE Continent.ContinentID = "+info.ContinentID+" && Player.PlayerID = "+info.PlayerID,function(err, results,fields){
        if(!!err) console.log(err);
      });
    }else if(info.TYPE == 'delete') {
      connection.query("DELETE Player,ContinentPlayer FROM Player INNER JOIN ContinentPlayer WHERE ContinentPlayer.PlayerID = Player.PlayerID && Player.GameName = \""+info.GameName+"\"",function(err, results,fields){
        if(!!err) console.log(err);
      });
    }else if(info.TYPE == 'edit') {
      connection.query("UPDATE Player SET PlayerName = \""+info.PlayerName+"\", GameName = \""+info.GameName+"\", MMR = "+info.MMR+", Nation = \""+info.Nation+"\", Winrate = "+info.Winrate+" WHERE PlayerID = " + info.PlayerID,function(err, results,fields) {
        if(!!err) console.log(err);
      });
    }
  }
   exports.postTeam = function(callback , info){
    if(info.TYPE == 'add') {
      connection.query("INSERT INTO Team VALUES ("+info.TeamID+",\""+info.TeamName+"\",\""+info.TeamsubName+"\",\""+info.Rating+"\",\""+info.Nation+"\")",function(err, results,fields){
        if(!!err) console.log(err);
      });
      connection.query("INSERT INTO ContinentTeam SELECT ContinentID,TeamID FROM Continent,Team WHERE Continent.ContinentID = "+info.ContinentID+" && Team.TeamID = "+info.TeamID,function(err, results,fields){
        if(!!err) console.log(err);
      });
    }else if(info.TYPE == 'delete') {
      connection.query("DELETE Team,ContinentTeam FROM Team INNER JOIN ContinentTeam WHERE ContinentTeam.TeamID = Team.TeamID && Team.TeamsubName = \""+info.TeamsubName+"\"",function(err, results,fields){
        if(!!err) console.log(err);
      });
    }else if(info.TYPE == 'edit') {
      connection.query("UPDATE Team SET TeamName = \""+info.TeamName+"\", TeamsubName = \""+info.TeamsubName+"\", Rating = "+info.Rating+", Nation = \""+info.Nation+"\" WHERE TeamID = " + info.TeamID,function(err, results,fields) {
        if(!!err) console.log(err);
      });
    }
   }
  exports.postHero = function(callback , info){
    if(info.TYPE == 'add') {
      connection.query("INSERT INTO Hero VALUES ("+info.HeroID+",\""+info.HeroName+"\",\""+info.HeroType+"\",\""+info.HeroAttackType+"\",\""+info.HeroRole+"\")",function(err, results,fields){
        if(!!err) console.log(err);
      });
    }else if(info.TYPE == 'delete') {
      connection.query("DELETE FROM Player WHERE PlayerID = "+info.PlayerID,function(err, results,fields){
        if(!!err) console.log(err);
      });
    }
  }

  exports.getBoston = function(callback){
    connection.query("SELECT BostonTeamId,TeamName,TeamsubName,BostonEarning FROM Team,Tournament Where Team.TeamID = Tournament.BostonTeamId ORDER BY BostonEarning DESC",function(err, results,fields){
      if(!!err) console.log(err);
      var data  = {
        Boston : results
      }
      callback(data);
    });
  }

  exports.getKiev = function(callback){
    connection.query("SELECT KievTeamId, TeamName,TeamsubName,KievEarning FROM Team,Tournament Where Team.TeamID = Tournament.KievTeamId ORDER BY KievEarning DESC",function(err, results,fields){
      if(!!err) console.log(err);
      var data  = {
        Kiev : results
      }
      callback(data);
    });

  }

  exports.getTi6 = function(callback){
    connection.query("SELECT Ti6TeamId,TeamName,TeamsubName,Ti6Earning FROM Team,Tournament Where Team.TeamID = Tournament.Ti6TeamId ORDER BY Ti6Earning DESC",function(err, results,fields){
      if(!!err) console.log(err);
      var data  = {
        Ti6 : results
      }
      callback(data);
    });
  }

  exports.getManilla = function(callback){
    connection.query("SELECT ManillaTeamId,TeamName,TeamsubName,ManillaEarning FROM Team,Tournament Where Team.TeamID = Tournament.ManillaTeamId ORDER BY ManillaEarning DESC",function(err, results,fields){
      if(!!err) console.log(err);
      var data  = {
        Manilla : results
      }
      callback(data);
    });
  }

  exports.getHeroMost = function(callback){
    connection.query("SELECT * FROM HeroMostWin",function(err, results,fields){
      if(!!err) console.log(err);
      var data  = {
        HeroMost : results
      }
      callback(data);
    });
  }

  // INSERT INTO Player VALUES (199,"asdads","asdads",8000,"Thai",42);
//   INSERT INTO TeamMember SELECT TeamID,PlayerID FROM Team,Player
// WHERE Team.TeamsubName ='OG' && Player.GameName = 'จ๊อบ ค้าม้า';
// INSERT INTO ContinentPlayer SELECT ContinentID,PlayerID FROM Continent,Player WHERE Continent.ContinentName = info.ContinentName && Player.PlayerID = info.PlayerID
//INSERT INTO ContinentPlayer SELECT ContinentID,PlayerID FROM Continent,Player WHERE Continent.ContinentName = "Sea & Oceania" && Player.PlayerID = 3

// DELETE Player,ContinentPlayer FROM Player INNER JOIN ContinentPlayer WHERE ContinentPlayer.PlayerID = Player.PlayerID && Player.GameName = "qqq";

// DELETE Team,ContinentTeam FROM Team INNER JOIN ContinentTeam WHERE ContinentTeam.TeamID = Team.TeamID && Team.TeamsubName = \""info.TeamsubName+"\""

// UPDATE Player SET PlayerName = "asdasd", GameName = "sadads", MMR = 9876, Nation = "Thai", Winrate = WHERE PlayerID = 204