var express = require('express');
var router = express.Router();
var mysql = require('mysql');


var app = express();
// Import Database Config File
var DBConfig = require("../database/DBConfig");

// Function for Creating Database Connection
function getSQLConnection(){
  return mysql.createConnection(DBConfig);
}

// Connection Variable
const conn = getSQLConnection();

// Connect DB

// conn.connect((err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("Mysql Connected!");
// });

/* GET home page. */
router.get('/fa17g08', function (req, res, next) {
  res.render(
    'index',
    {
      title: 'CAL STATE REAL ESTATE'
    }
  );
});

router.get('/fa17g08/', function(req, res, next) {
  res.render(
    'index',
    {
      title: 'CAL STATE REAL ESTATE'
    }
  );
});

/*PROPERTY PAGE -KG*/
router.get('/fa17g08/propertyPage', function(req, res, next) {
    res.render('propertyPage', { title: 'PropertyPage' });
});

/*DASHBOARD PAGE -FB*/
router.get('/fa17g08/userDashboard', function(req, res, next) {
    res.render('dash_test', { title: 'Your Dashboard' });
});

router.get('/fa17g08/signUp', function(req, res, next) {
    res.render('regPage_wip', { title: 'Sing Up at our Page!' });
});

/*GET Testing Page*/
router.get('/fa17g08/testingPage', function(req, res, next) {
    res.render('testingPage', { title: 'TestingPage' });
});

//falco:
//property/?searchInput=1234
//app->router; /property/:searchInput' delete last;

// Fetch All  -- Moorani
router.get('/fa17g08/property/', (req, res, next) => {
  var records = [];

  let sql = `SELECT * FROM Property`;
  conn.query(sql, (err, result) =>  {
    if (err)
    {
      throw err;
    }
    else
    {
      for (var i = 0; i < result.length; i++) {
        var propertyRecord = {
          'PropertyID':result[i].PropertyID,
          'Bedrooms':result[i].Bedrooms,
          'Bathrooms':result[i].Bathrooms,
          'Address':result[i].Address,
          'Cost':result[i].Cost,
          'ZipCode':result[i].ZipCode,
          'City':result[i].City,
          'Status':result[i].Status
        }
        records.push(propertyRecord);
      }
      res.render("allProperty", { "propertyRecords": records }, (error, html) => {
        if (error) {
          throw error;
          res.status(404).send(`Sorry! Page for ${req.params.name} not found!`);
        } else {
          res.send(html);
        }
      });
      // res.send(JSON.stringify(result));   /* Uncomment if necessary */
      // res.json({success: true, output: result});  /* Tested with Postman API Call */
    }
  });
});

// Fetch Property with PropertyID -- Moorani
router.get('/fa17g08/property/:id', (req, res, next) => {
  var id = req.params.id;
  let sql = `SELECT * FROM Property WHERE PropertyID=${id}`;
  conn.query(sql, (err, result) =>  {
    if (err)
    {
      throw err;
    }
    else
    {
      // res.send(JSON.stringify(result));   /* Uncomment if necessary */
      res.json({success: true, output: result});  /* Tested with Postman API Call */
    }
  });
});

// Fetch Property with CityName -- Moorani
router.get('/fa17g08/property/city/:cityName', (req, res, next) => {
  var records = [];

  var cityName = req.params.cityName;
  let sql = `SELECT * FROM Property WHERE City='${cityName}'`;
  conn.query(sql, (err, result) =>  {
    if (err)
    {
      throw err;
    }
    else
    {
      for (var i = 0; i < result.length; i++) {
        var propertyRecord = {
          'PropertyID':result[i].PropertyID,
          'Bedrooms':result[i].Bedrooms,
          'Bathrooms':result[i].Bathrooms,
          'Address':result[i].Address,
          'Cost':result[i].Cost,
          'ZipCode':result[i].ZipCode,
          'City':result[i].City,
          'Status':result[i].Status
        }
        records.push(propertyRecord);
      }

      res.render("allProperty", { "propertyRecords": records }, (error, html) => {
        if (error) {
          throw error;
          res.status(404).send(`Sorry! Page for ${req.params.name} not found!`);
        } else {
          res.send(html);
        }
      });

      // res.send(JSON.stringify(result));  /* Uncomment if necessary */
      // res.json({success: true, output: result});  /* Tested with Postman API Call */
    }
  });
});

// Fetch Property with ZipCode -- Moorani
router.get('/fa17g08/property/zip/:zipCode', (req, res, next) => {
  var records = [];

  var zipCode = req.params.zipCode;
  let sql = `SELECT * FROM Property WHERE ZipCode=${zipCode}`;
  conn.query(sql, (err, result) =>  {
    if (err)
    {
      throw err;
    }
    else
    {
      for (var i = 0; i < result.length; i++) {
        var propertyRecord = {
          'PropertyID':result[i].PropertyID,
          'Bedrooms':result[i].Bedrooms,
          'Bathrooms':result[i].Bathrooms,
          'Address':result[i].Address,
          'Cost':result[i].Cost,
          'ZipCode':result[i].ZipCode,
          'City':result[i].City,
          'Status':result[i].Status
        }
        records.push(propertyRecord);
      }

      res.render("test", { "propertyRecords": records }, (error, html) => {
        if (error) {
          throw error;
          res.status(404).send(`Sorry! Page for ${req.params.name} not found!`);
        } else {
          res.send(html);
        }
      });

      // res.send(JSON.stringify(result));  /* Uncomment if necessary */
      // res.json({success: true, output: result});  /* Tested with Postman API Call */
    }
  });
});

// Fetch Property with City Name & ZipCode -- Moorani
router.get('/fa17g08/property/:cityName/:zipCode', (req, res, next) => {
  var cityName = req.params.cityName;
  var zipCode = req.params.zipCode;
  let sql = `SELECT * FROM Property WHERE ZipCode = ${zipCode} AND City = '${cityName}'`;
  conn.query(sql, (err, result) => {
    if (err)
    {
      throw err;
    }
    else
    {
      // res.send(JSON.stringify(result));    /* Uncomment if necessary */
      res.json({success: true, output: result});  /* Tested with Postman API Call */
    }
  });
});

/*GET database */
router.get('/fa17g08/property', function(req, res, next) {
  var propertyList = [];
  var connection = getSQLConnection();
  console.log(req.params.searchInput);
  //falco:
  res.send(req.param.searchInput);
  //
  connection.connect();

  connection.query('SELECT * FROM Property', function(err, rows, fields)
  {
    if(err)
    {
      res.status(500).json({"status_code": 500, "status_message": "internal server error"});
    } else
    {
      for (var i = 0; i < rows.length; i++)
      {
        var property =
        {
           'id':rows[i].PropertyID,
           'address':rows[i].Address,
           'city':rows[i].City,
           'zipCode':rows[i].ZipCode,
           'cost':rows[i].Cost,
           'bedrooms':rows[i].Bedrooms,
           'bathrooms':rows[i].Bathrooms
        }
        propertyList.push(property);
      }
    }
    //CHANGE THIS
    //res.render('index', {"propertyList": propertyList})
    //Falco:
    res.render('testingPage', {"propertyList": rows})
  });
  connection.end();
  });

module.exports = router;
