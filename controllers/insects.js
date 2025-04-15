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
exports.insect_delete = async function (req, res) {
    console.log("delete " + req.params.id);
    try {
        const result = await Insect.findByIdAndDelete(req.params.id);
        console.log("Removed " + result);
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": Error deleting ${err}}`);
    }
};
// Handle Insect update form on PUT.
exports.insect_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Insect.findById(req.params.id)
        // Do updates of properties
        if (req.body.name) toUpdate.name = req.body.insect_name;
        if (req.body.size) toUpdate.size = req.body.size;
        if (req.body.lifespan) toUpdate.lifespan = req.body.lifespan;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
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

