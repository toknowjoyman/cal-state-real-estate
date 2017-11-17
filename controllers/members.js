module.exports = function (router, db) {
    // Fetch Members from members table
    let sql = "SELECT * FROM members"; //SQL Query
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json({"output": result});
        router.get('/fa17g08/members', function (req, res, next) {
            res.render(
                'about-us/about-us',
                {
                    title: 'Team Members : CAL STATE REAL ESTATE',
                    team: memberList
                }
            );
        });
    });
}


