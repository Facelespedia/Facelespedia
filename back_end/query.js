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

  exports.getTeamSortRating = function(callback){
    connection.query("SELECT Team.TeamID,TeamName,TeamsubName,Rating,Nation,ContinentName FROM Team INNER JOIN (SELECT Continent.ContinentName ,ContinentTeam.TeamID FROM Continent INNER JOIN ContinentTeam ON ContinentTeam.ContinentID = Continent.ContinentID ) AS NC ON NC.TeamID = Team.TeamID,ContinentTeam WHERE Team.TeamID = ContinentTeam.TeamID ORDER BY Rating DESC",function(err, results,fields){
      if(!!err) console.log(err);
      var data  = {
        TeamSortRating : results
      }
      callback(data);
    });
  }

  exports.getPlayerSortMMR = function(callback){
      connection.query("SELECT Player.PlayerID,PlayerName,GameName,MMR,Nation,Winrate,ContinentName FROM Player INNER JOIN (SELECT Continent.ContinentName ,ContinentPlayer.PlayerID FROM Continent INNER JOIN ContinentPlayer ON ContinentPlayer.ContinentID = Continent.ContinentID ) AS NC ON NC.PlayerID = Player.PlayerID,ContinentPlayer WHERE Player.PlayerID = ContinentPlayer.PlayerID ORDER BY MMR DESC",function(err, results,fields){      if(!!err) console.log(err);
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

  exports.getStats = function(callback,info){
    var data,query;
    if(info.limit > 0) {
      query = 'SELECT Hero.HeroID,HeroName,HeroType,'+info.option+
                  ' AS Percent FROM HeroStat,Hero Where Hero.HeroID = HeroStat.HeroID ORDER BY '+info.option+' DESC LIMIT ' + info.limit;
    }else {
      query = 'SELECT Hero.HeroID,HeroName,HeroType,'+info.option+
                  ' AS Percent FROM HeroStat,Hero Where Hero.HeroID = HeroStat.HeroID ORDER BY '+info.option+' DESC';
    }
    connection.query(query,function(err, results,fields){
        if(!!err) console.log(err);
        data  = {
          Stats : results
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

   exports.getTable = function(callback){
    connection.query("SELECT * FROM HeroMostWin",function(err, results,fields){
      if(!!err) console.log(err);
      var data  = {
        Table : results
      }
      callback(data);
    });
  }

  exports.getQuerySort = function(callback,info){
    var data,query='';
    if(info.TYPE == 'Team') {
      query += 'SELECT * FROM Team ' ;
      if(info.group != 'All') {
          query += 'WHERE TeamID IN (SELECT TeamID FROM ContinentTeam WHERE ContinentID IN (SELECT ContinentID FROM Continent WHERE ContinentName = "'+info.group+'" )) ';
      }
      query += 'ORDER BY ' + info.sort + ' ';
      if(info.value == 'Max') {
        query += 'DESC ';
      }else if(info.value == 'Min') {
        query += 'ASC ';
      }
      if(info.limit != 'All') {
        query += 'LIMIT ' + info.limit + ' ';
      }
    }else if(info.TYPE == 'Player') {
      query += 'SELECT * FROM Player ' ;
      if(info.group != 'All') {
          query += 'WHERE PlayerID IN (SELECT PlayerID FROM ContinentPlayer WHERE ContinentID IN (SELECT ContinentID FROM Continent WHERE ContinentName = "'+info.group+'" )) ';
      }
      query += 'ORDER BY ' + info.sort + ' ';
      if(info.value == 'Max') {
        query += 'DESC ';
      }else if(info.value == 'Min') {
        query += 'ASC ';
      }
      if(info.limit != 'All') {
        query += 'LIMIT ' + info.limit + ' ';
      }
    }else if(info.TYPE == 'Hero') {
      query += 'SELECT * FROM Hero ';
      if(info.group != 'All') {
        query += 'WHERE HeroType = "'+info.group+'" ';
      }
      if(info.attack != 'All') {
        if(info.group != 'All') {
          query += 'AND ';
        }else {
          query += 'WHERE ';
        }
        query += 'HeroAttackType = "'+info.attack+'" ';
      }
      if(info.role != 'All') {
        if(info.attack != 'All') {
          query += 'AND ';
        }else if(info.group != 'All' && info.attack == 'All') {
          query += 'AND ';
        }else{
          query += 'WHERE ';
        }
        query += 'HeroRole = "'+info.role+'" ';
      }
      if(info.limit != 'All') {
        query += 'LIMIT ' + info.limit + ' ';
      }
    }else if(info.TYPE == 'MaxHero') {
        query += 'select Hero.HeroName, COUNT(Hero.HeroID) AS MostLike FROM Hero, HeroMostWin '+
                  'WHERE Hero.HeroID = HeroMostWin.Hero1 '+
                  'OR Hero.HeroID = HeroMostWin.Hero2 '+
                  'OR Hero.HeroID = HeroMostWin.Hero3 '+
                  'OR Hero.HeroID = HeroMostWin.Hero4 '+
                  'OR Hero.HeroID = HeroMostWin.Hero5 '+
                  'GROUP BY Hero.HeroName '+
                  'ORDER BY MostLike  DESC';
    }
    else if(info.TYPE == 'TopFive') {
        query += 'select team.TeamName, manilla.PRIZE + boston.PRIZE + kiev.PRIZE + ti6.PRIZE AS PRIZE from (select team.teamname as TEAMNAME , tournament.manillaearning as PRIZE from team , tournament  where team.teamid = tournament.ManillaTeamId ) manilla,'+
                  '(select team.teamname as TEAMNAME , tournament.bostonearning as PRIZE from team , tournament  where team.teamid = tournament.BostonTeamId) boston,'+
                  '(select team.teamname as TEAMNAME , tournament.kievearning as PRIZE from team , tournament  where team.teamid = tournament.kievTeamId) kiev,'+
                  '(select team.teamname as TEAMNAME , tournament.ti6earning as PRIZE from team , tournament  where team.teamid = tournament.ti6TeamId) ti6,team '+
                  ' where team.teamname = manilla.TEAMNAME and manilla.teamname = boston.teamname and boston.teamname = kiev.teamname and kiev.teamname = ti6.teamname and manilla.teamname = ti6.teamname ORDER BY PRIZE DESC';
    }

    connection.query(query,function(err, results,fields){
        if(!!err) console.log(err);
        data  = {
          QuerySort : results
        }
        callback(data);
      }); 
  }
