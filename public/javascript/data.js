var getTeamEurope = [],getTeamSea = [],getTeamAmerica = [],getTeamChina = [];
var getPlayerEurope = [],getPlayerSea = [],getPlayerAmerica = [],getPlayerChina = [];
var getStatsWin = [],getStatsPick = [],getStatsBanned = [],getStatsContest = [],getStatsFirstPick = [],getStatsFirstBanned = [];

$.ajax({
        type: "GET",
        url: "http://localhost:3000/database/getTeam",
        dataType: "json",
        success: function(res){
            getTeam = res;
        }
    });
$.ajax({
        type: "GET",
        url: "http://localhost:3000/database/getTeamSortRating",
        dataType: "json",
        success: function(res){
            getTeamSortRating = res;
        }
 });
 $.ajax({
        type: "GET",
        url: "http://localhost:3000/database/getContinent",
        dataType: "json",
        success: function(response){
           getContinent = response
        }
 });
 $.ajax({
        type: "GET",
        url: "http://localhost:3000/database/getContinentTeam",
        dataType: "json",
        success: function(res){
           for(var j = 0; j < getTeamSortRating.TeamSortRating.length; j++){
            for( var i = 0; i < res.ContinentTeam.length; i++  ) {
                  if(res.ContinentTeam[i].TeamID == getTeamSortRating.TeamSortRating[j].TeamID){
                        if(res.ContinentTeam[i].ContinentID == getContinent.Continent[0].ContinentID) {
                              getTeamSea.push(getTeamSortRating.TeamSortRating[j]);
                              break;
                        }else if(res.ContinentTeam[i].ContinentID == getContinent.Continent[1].ContinentID) {
                              getTeamEurope.push(getTeamSortRating.TeamSortRating[j]);
                              break;
                        }else if(res.ContinentTeam[i].ContinentID == getContinent.Continent[2].ContinentID) {
                              getTeamAmerica.push(getTeamSortRating.TeamSortRating[j]);
                              break;
                        }else{
                              getTeamChina.push(getTeamSortRating.TeamSortRating[j]);
                              break;
                        }
                  }
            }
           }
        }
 });
 $.ajax({
      type: "GET",
      url: "http://localhost:3000/database/getPlayerWithTeam",
      dataType: "json",
      success: function(res){
            getPlayerWithTeam = res
      }
  });
  $.ajax({
      type: "GET",
      url: "http://localhost:3000/database/getPlayer",
      dataType: "json",
      success: function(res){
            getPlayer = res
      }
  });
  $.ajax({
        type: "GET",
        url: "http://localhost:3000/database/getPlayerSortMMR",
        dataType: "json",
        success: function(res){
           getPlayerSortMMR = res
        }
  });
  $.ajax({
        type: "GET",
        url: "http://localhost:3000/database/getContinentPlayer",
        dataType: "json",
        success: function(res){
           getContinentPlayer = res
            for(var j = 0; j < getPlayerSortMMR.PlayerSortMMR.length; j++){
                  for( var i = 0; i < res.ContinentPlayer.length; i++  ) {
                        if(res.ContinentPlayer[i].PlayerID == getPlayerSortMMR.PlayerSortMMR[j].PlayerID){
                              if(res.ContinentPlayer[i].ContinentID == getContinent.Continent[0].ContinentID) {
                                    getPlayerSea.push(getPlayerSortMMR.PlayerSortMMR[j]);
                                    break;
                              }else if(res.ContinentPlayer[i].ContinentID == getContinent.Continent[1].ContinentID) {
                                    getPlayerEurope.push(getPlayerSortMMR.PlayerSortMMR[j]);
                                    break;
                              }else if(res.ContinentPlayer[i].ContinentID == getContinent.Continent[2].ContinentID) {
                                    getPlayerAmerica.push(getPlayerSortMMR.PlayerSortMMR[j]);
                                    break;
                              }else{
                                    getPlayerChina.push(getPlayerSortMMR.PlayerSortMMR[j]);
                                    break;
                              }
                        }
                  }
           }
        }
  });
// $.ajax({
//         type: "GET",
//         url: "http://localhost:3000/database/getHero",
//         dataType: "json",
//         success: function(response){
//            getHero = response
//         }
// });
// $.ajax({
//       type: "GET",
//       url: "http://localhost:3000/database/getHeroStat",
//       dataType: "json",
//       success: function(response){
//             getHeroStat = response
//       }
// });
$.ajax({
      type: "GET",
      url: "http://localhost:3000/database/getStatsWin",
      dataType: "json",
      success: function(response){
            getStatsWin = response
      }
});
$.ajax({
      type: "GET",
      url: "http://localhost:3000/database/getStatsPick",
      dataType: "json",
      success: function(response){
            getStatsPick = response
      }
});
$.ajax({
      type: "GET",
      url: "http://localhost:3000/database/getStatsContest",
      dataType: "json",
      success: function(response){
            getStatsContest = response
      }
});
$.ajax({
      type: "GET",
      url: "http://localhost:3000/database/getStatsBanned",
      dataType: "json",
      success: function(response){
            getStatsBanned = response
      }
});
$.ajax({
      type: "GET",
      url: "http://localhost:3000/database/getStatsFirstPick",
      dataType: "json",
      success: function(response){
            getStatsFirstPick = response
      }
});
$.ajax({
      type: "GET",
      url: "http://localhost:3000/database/getStatsFirstBanned",
      dataType: "json",
      success: function(response){
            getStatsFirstBanned = response
      }
});
$.ajax({
      type: "GET",
      url: "http://localhost:3000/database/getBoston",
      dataType: "json",
      success: function(response){
            getBoston = response
      }
});
$.ajax({
      type: "GET",
      url: "http://localhost:3000/database/getKiev",
      dataType: "json",
      success: function(response){
            getKiev = response
      }
});
$.ajax({
      type: "GET",
      url: "http://localhost:3000/database/getManilla",
      dataType: "json",
      success: function(response){
            getManilla = response
      }
});
$.ajax({
      type: "GET",
      url: "http://localhost:3000/database/getTi6",
      dataType: "json",
      success: function(response){
            getTi6 = response
      }
});
$.ajax({
      type: "GET",
      url: "http://localhost:3000/database/getHeroMost",
      dataType: "json",
      success: function(response){
            getHeroMost = response
      }
});
