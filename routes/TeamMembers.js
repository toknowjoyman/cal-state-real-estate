var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('TeamMembers', { title: 'TeamMembers' });
});

router.get('/', function(req, res, next) {
    res.render('team-member-Falco-Becker', { title: 'Falco' });
});

router.get('/', function(req, res, next) {
    res.render('team-member-Karan-Gupta', { title: 'Karan' });
});

router.get('/', function(req, res, next) {
    res.render('team-member-Richard-Robinson', { title: 'Richard' });
});

router.get('/', function(req, res, next) {
    res.render('team-member-Vidit-Joy-Manglani', { title: 'Vidit' });
});


module.exports = router;