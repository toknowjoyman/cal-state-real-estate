const express = require("express");
const router = express.Router();
const mysql = require('mysql');

app = express();

// Import Database Config File
const DBConfig = require("../database/DBConfig");

// Function for Creating Database Connection
function getSQLConnection(){
  return mysql.createConnection(DBConfig);
}

// Connection Variable
const conn = getSQLConnection();

// Handling GET at /
router.get('/', (req, res) => {
    // Fetch Members from members table
    let sql = "SELECT * FROM members"; //SQL Query
    conn.query(sql, (err, result) => {
        if (err) throw err;
        // console.log(`The result is: ${JSON.stringify(result)}`);
        // res.json({"output": result});

        res.render("about-us/members", { team: result, title: "Members : CAL STATE REAL ESTATE" }, (err, html) => {
            if (err) {
                throw err;
                res.status(404).send(`Sorry! Page not found!`);
            } else {
                res.send(html);
            }
        });
    });
});

router.get('/:memberName', (req, res) => {
    var memberName = req.params.memberName;
    res.render('about-us/' + memberName, {title: memberName + 'CAL STATE REAL ESTATE'}, (err, html) => {
        if (err) {
            throw err;
            res.status(404).send(`Sorry! Page for ${memberName} not found!`);
        } else {
            res.send(html);
        }
    });
});

module.exports = router;