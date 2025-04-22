var express = require('express');
const insect_controller = require('../controllers/insects');
var router = express.Router();
const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    res.redirect('/login');
};

/* GET. */
router.get('/', insect_controller.insect_view_all_Page);
/* GET detail insect page */
router.get('/detail', insect_controller.insect_view_one_Page);
/* GET create insect page */
router.get('/create', insect_controller.insect_create_Page);
/* GET update insect page */
router.get('/update', secured, insect_controller.insect_update_Page);
/* GET delete insect page */
router.get('/delete', insect_controller.insect_delete_Page);

router.post('/create', insect_controller.insect_create_post);

module.exports = router;
