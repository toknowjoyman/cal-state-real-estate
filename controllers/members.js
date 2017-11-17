module.exports = function(app, conn) {
    
    // GET Route for '/members'
    app.get("members", (req, res) => {  
        res.send("hi");      
        
        // // Fetch Members from members table
        // let sql = "SELECT * FROM members"; //SQL Query
        // conn.query(sql, (err, result) => {
        //     if (err) throw err;
        //     console.log(`The result is: ${JSON.stringify(result)}`);
        //     res.json({"output": result});

        //     // res.render("about-us/members", { team: result }, (err, html) => {
        //     //     if (err) {
        //     //         throw err;
        //     //         res.status(404).send(`Sorry! Page for ${req.params.name} not found!`);
        //     //     } else {
        //     //         res.send(html);
        //     //     }
        //     // });
        // });
    });
}