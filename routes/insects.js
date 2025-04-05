var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    let results = [
        { name: "Monarch Butterfly", size: 10, lifespan: 6 },
        { name: "Honey Bee", size: 3, lifespan: 5 },
        { name: "Atlas Moth", size: 25, lifespan: 2 }
    ];
    res.render('insects', { title: 'Search Results Insects', results: results });
});

module.exports = router;
