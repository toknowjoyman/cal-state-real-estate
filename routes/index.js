var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET team page */
router.get('/TeamMembers', function(req, res, next) {
  res.render('TeamMembers', { title: 'TeamMembers' });
});

/* GET team page */
router.get('/TeamMembers/FalcoBecker', function(req, res, next) {
  res.render('TeamMembers/FalcoBecker', { title: 'FalcoPage' });
});

/* GET team page */
router.get('/TeamMembers/RichardRobinson', function(req, res, next) {
  res.render('TeamMembers/RichardRobinson', { title: 'RichardPage' });
});

/* GET team page */
router.get('/TeamMembers/KaranGupta', function(req, res, next) {
  res.render('TeamMembers/KaranGupta', { title: 'KaranPage' });
});

/* GET team page */
router.get('/TeamMembers/ViditJoyManglani', function(req, res, next) {
  res.render('TeamMembers/ViditJoyManglani', { title: 'ViditPage' });
});


module.exports = router;
