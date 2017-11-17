module.exports = function (router, db) {
    // Fetch Members from members table
    let sql = "SELECT * FROM members"; //SQL Query
    // db.query(sql, (err, result) => {
    //     if (err) throw err;
        router.get('/fa17g08/members', function (req, res, next) {
            res.render(
                'about-us/about-us',
                {
                    title: 'Team Members : CAL STATE REAL ESTATE',
                    team: memberList
                }
            );
        });
    // });
}


var memberList = [
    {
        name: "Akolade Tinubu",
        page_name: "akolade",
        picture: "/fa17g21/public/images/akolade.jpg",
        designation: "Group Lead",
        profile: "Hi there! :D",
        mail: "akolade-adebayo.tinubu@informatiks.hs-fulda.de",
        facebook: "https://www.facebook.com/aatinubu",
        twitter: "https://www.twitter.com/akoladetinubu"
    },
    {
        name: "Prithvi Raj Moorani",
        page_name: "pmoorani",
        picture: "/fa17g21/public/images/raj.jpg",
        designation: "Tech Lead",
        profile: "Hello from Prithvi Raj Moorani :)",
        mail: "akolade-adebayo.tinubu@informatiks.hs-fulda.de",
        facebook: "https://www.facebook.com/aatinubu",
        twitter: "https://www.twitter.com/akoladetinubu"
    },
    {
        name: "Syed Noor Ali Jafri",
        page_name: "noorali",
        picture: "/fa17g21/public/images/noor.jpg",
        designation: "Backend Lead",
        profile: "Noor Ali Says Hi :D",
        mail: "noor.jafri@live.com",
        facebook: "https://www.facebook.com/noor.ali.jafri",
        webpage: "https://noorjafri.com"
    },

    {
        name: "Muhammad Taimoor",
        page_name: "taimoor",
        picture: "/fa17g21/public/images/taimoor.jpg",
        designation: "Frontend Lead",
        profile: "Hello from Muhammad Taimoor :)",
        mail: "muhammad.taimoor@informatiks.hs-fulda.de",
        facebook: "https://www.facebook.com/gooner10tam"
    }
];