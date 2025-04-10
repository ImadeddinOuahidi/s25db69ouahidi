var Insect = require('../models/insects');
// List of all insects
exports.insect_list = async function (req, res) {
    try {
        theInsects = await Insect.find();
        res.send(theInsects);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific Insect.
exports.insect_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Insect.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle Insect create on POST.
exports.insect_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Insect();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"name":"goat", "size":12, "lifespan":4}
    document.name = req.body.name;
    document.size = req.body.size;
    document.lifespan = req.body.lifespan;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
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
exports.insect_view_all_Page = async function (req, res) {
    try {
        theInsects = await Insect.find();
        res.render('insects', { title: 'Insect Search Results', results: theInsects });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

