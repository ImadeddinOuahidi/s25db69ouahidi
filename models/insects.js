const mongoose = require("mongoose");

const insectSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        min: [1, 'Size must be at least 1 cm'],
        max: [20, 'Size cannot exceed 20 cm']
    },
    lifespan: {
        type: Number,
        min: [1, 'Lifespan must be at least 1 week'],
        max: [52, 'Lifespan cannot exceed 52 weeks']
    }
});

module.exports = mongoose.model("Insect", insectSchema);
