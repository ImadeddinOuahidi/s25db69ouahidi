var Insect = require('../models/insects');
// List of all Insects
exports.insect_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Insect list');
};
// for a specific Insect.
exports.insect_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Insect detail: ' + req.params.id);
};
// Handle Insect create on POST.
exports.insect_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Insect create POST');
};
// Handle Insect delete from on DELETE.
exports.insect_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Insect delete DELETE ' + req.params.id);
};
// Handle Insect update form on PUT.
exports.insect_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Insect update PUT' + req.params.id);
};
