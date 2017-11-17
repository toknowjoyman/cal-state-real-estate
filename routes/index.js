var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var app = express();

// Get members
var membersController = require('../controllers/members');

function getSQLConnection(){
  return mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "falco",
    database: "fa17g08"
  });
}


// Create Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'yourpassword',
  database: 'yourdatabase'
});

// Connect DB
// db.connect((err) => {
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

/* GET team page */
membersController(router, db);

/* GET memeber page */
router.get('/fa17g08/TeamMembers/FalcoBecker', function(req, res, next) {
  res.render('TeamMembers/FalcoBecker', { title: 'FalcoPage' });
});

/* GET team page */
router.get('/fa17g08/TeamMembers/RichardRobinson', function(req, res, next) {
  res.render('TeamMembers/Richard-Robinson', { title: 'RichardPage' });
});

/* GET team page */
router.get('/fa17g08/TeamMembers/KaranGupta', function(req, res, next) {
  res.render('TeamMembers/KaranGupta', { title: 'KaranPage' });
});

/* GET team page */
router.get('/fa17g08/TeamMembers/ViditJoyManglani', function(req, res, next) {
  res.render('TeamMembers/ViditJoyManglani', { title: 'ViditPage' });
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
