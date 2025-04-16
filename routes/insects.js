var express = require('express');
const insect_controller= require('../controllers/insects');
var router = express.Router();

/* GET. */
router.get('/', insect_controller.insect_view_all_Page);
/* GET detail insect page */
router.get('/detail', insect_controller.insect_view_one_Page);
/* GET create insect page */
router.get('/create', insect_controller.insect_create_Page);
/* GET update insect page */
router.get('/update', insect_controller.insect_update_Page);
/* GET delete insect page */
router.get('/delete', insect_controller.insect_delete_Page);

module.exports = router;
