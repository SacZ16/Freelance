const mongoose = require("mongoose");
const imghomeSchema = new mongoose.Schema({
  imagenes: [
    {
        type: String,
    },
  ],
});

module.exports = mongoose.model("Imghome", imghomeSchema);
