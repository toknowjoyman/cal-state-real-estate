var express = require('express');
var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' }); // title: index: group 08 - section 02 - global
//});

//Enter route for about-page:
router.get('/index', function(req, res, next) {
  res.render('Index-Page');
});

module.exports = router;
