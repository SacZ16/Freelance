const mongoose = require("mongoose");
const homeSchema = new mongoose.Schema({
    slice: [{
        type: String
    }],
    posters: [{
        type: String
    }],
    elegidos: {
        type: mongoose.Schema.Types.ObjectId, ref: "Categoria"
    },
    destacados: [{
        type: mongoose.Schema.Types.ObjectId, ref: "Product"
    }],
});

module.exports = mongoose.model("Home", homeSchema);