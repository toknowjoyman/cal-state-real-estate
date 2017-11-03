var mysql = require('mysql');
var connection = require('./connection')

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Undyingbane04",
  database: "fa17g08"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM property", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});

function query()
{
return con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM property", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
}
