var express = require('express');
const insect_controlers= require('../controllers/insects');
var router = express.Router();

/* GET. */
router.get('/', insect_controlers.insect_view_all_Page);

module.exports = router;
