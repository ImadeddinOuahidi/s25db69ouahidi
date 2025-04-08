var Insect = require('../models/insects');
// List of all insects
exports.insect_list = async function(req, res) {
    try{
    theInsects = await Insect.find();
    res.send(theInsects);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
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

// VIEWS
// Handle a show all view
exports.insect_view_all_Page = async function(req, res) {
    try{
    theInsects = await Insect.find();
    res.render('insects', { title: 'Insect Search Results', results: theInsects });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   };