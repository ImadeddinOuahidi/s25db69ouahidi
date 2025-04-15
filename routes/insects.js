var express = require('express');
const insect_controller= require('../controllers/insects');
var router = express.Router();

/* GET. */
router.get('/', insect_controller.insect_view_all_Page);
/* GET detail insect page */
router.get('/detail', insect_controller.insect_view_one_Page);
/* GET create insect page */
router.get('/create', insect_controller.insect_create_Page);

module.exports = router;
