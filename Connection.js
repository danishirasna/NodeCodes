var mysql = require('mysql');
module.exports.MySqlCon=function() {
   

    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      insecureAuth:true
      
    });
    
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected MySql ...!");
    });
}