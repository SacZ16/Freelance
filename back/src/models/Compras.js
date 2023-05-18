const mongoose = require("mongoose");
const comprasSchema = new mongoose.Schema({
  pedido: {
    type: String,
    require: true
  }, 
  fecha: {
    type: Date,
    default: Date.now
  },
  productos: [{
    type: Object,
    require: true
  }],
  total: {
    type: Number,
    require: true
  },
  codigoEnvio: {
    type: String,
    require: true
  },
  comprador: { type: mongoose.Schema.Types.ObjectId, ref: "User" }

});

module.exports = mongoose.model("Compras", comprasSchema);