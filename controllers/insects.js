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
    document.name = req.body.name;
    document.size = req.body.size;
    document.lifespan = req.body.lifespan;
    try {
        let result = await document.save();
        res.status(200).json(result);
    } catch (err) {
        if (err.name === 'ValidationError') {
            res.status(400).json({ error: err.message });
        } else {
            res.status(500).json({ error: "Server error" });
        }
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
// Handle a show one view with id specified by query
exports.insect_view_one_Page = async function (req, res) {
    console.log("Single view for insect id " + req.query.id);
    try {
        let result = await Insect.findById(req.query.id);
        res.render('insectdetail', {
            title: 'Insect Detail',
            toShow: result
        });
    } catch (err) {
        res.status(500);
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for creating an insect.
// No body, no path param, no query.
exports.insect_create_Page = function (req, res) {
    console.log("create view");
    try {
        res.render('insectcreate', { title: 'Insect Create' });
    } catch (err) {
        res.status(500);
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for updating an insect.
// query provides the id
exports.insect_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id);
    try {
        let result = await Insect.findById(req.query.id);
        res.render('insectupdate', { title: 'Insect Update', toShow: result });
    } catch (err) {
        res.status(500);
        res.send(`{'error': '${err}'}`);
    }
};
// Handle a delete one view with id from query
exports.insect_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id);
    try {
        let result = await Insect.findById(req.query.id);
        res.render('insectdelete', { title: 'Insect Delete', toShow: result });
    } catch (err) {
        res.status(500);
        res.send(`{'error': '${err}'}`);
    }
};