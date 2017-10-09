var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/fa17g08', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET team page */
router.get('/fa17g08/TeamMembers', function(req, res, next) {
  res.render('TeamMembers', { title: 'TeamMembers' });
});

/* GET team page */
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


module.exports = router;
