var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "falco"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

function query()
{
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM property", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
})
};
/*
function connect()
{
  return con.connect(function(err)
  {
    if (err) throw err;
    console.log("Connected!");
  });
  */
