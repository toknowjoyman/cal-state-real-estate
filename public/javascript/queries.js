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

function initMap() {
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}