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
        url: "http://localhost:3000/database/getPlayerSortMMR",
        dataType: "json",
        success: function(res){
           getPlayerSortMMR = res
        }
  });
 $.ajax({
        type: "GET",
        url: "http://localhost:3000/database/getContinent",
        dataType: "json",
        success: function(res){
           getContinent = res
           for(var i = 0; i < getPlayerSortMMR.PlayerSortMMR.length; i++){
                  if(res.Continent[0].ContinentName == getPlayerSortMMR.PlayerSortMMR[i].ContinentName) {
                        getPlayerSea.push(getPlayerSortMMR.PlayerSortMMR[i]);
                  }else if(res.Continent[1].ContinentName == getPlayerSortMMR.PlayerSortMMR[i].ContinentName) {
                        getPlayerEurope.push(getPlayerSortMMR.PlayerSortMMR[i]);
                  }else if(res.Continent[2].ContinentName == getPlayerSortMMR.PlayerSortMMR[i].ContinentName) {
                        getPlayerAmerica.push(getPlayerSortMMR.PlayerSortMMR[i]);
                  }else{
                        getPlayerChina.push(getPlayerSortMMR.PlayerSortMMR[i]);
                  }
            }
            for(var j = 0; j < getTeamSortRating.TeamSortRating.length; j++){
                  if(res.Continent[0].ContinentName == getTeamSortRating.TeamSortRating[j].ContinentName) {
                        getTeamSea.push(getTeamSortRating.TeamSortRating[j]);
                  }else if(res.Continent[1].ContinentName == getTeamSortRating.TeamSortRating[j].ContinentName) {
                        getTeamEurope.push(getTeamSortRating.TeamSortRating[j]);
                  }else if(res.Continent[2].ContinentName == getTeamSortRating.TeamSortRating[j].ContinentName) {
                        getTeamAmerica.push(getTeamSortRating.TeamSortRating[j]);
                  }else{
                        getTeamChina.push(getTeamSortRating.TeamSortRating[j]);
                  }
           }
      }
 });
 $.ajax({
        type: "GET",
        url: "http://localhost:3000/database/getContinentTeam",
        dataType: "json",
        success: function(res){
            getContinentTeam = res
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
        url: "http://localhost:3000/database/getHero",
        dataType: "json",
        success: function(response){
           getHero = response
        }
});
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
