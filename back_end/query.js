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

exports.getPersons = function(callback){
  connection.query("SELECT * FROM Personss",function(err, results,fields){
    if(!!err) console.log(err);
    var data  = {
      person : results
    }
    callback(data);
  });
}
