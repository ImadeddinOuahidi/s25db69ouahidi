const mongoose = require("mongoose")
const insectSchema = mongoose.Schema({
    name: String,
    size: Number,
    lifespan: Number
})
module.exports = mongoose.model("Insect", insectSchema)