const mongoose = require("mongoose");
const productoSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  precio: {
    type: String,
    required: true,
  },
  unidades: {
    type: String,
    required: true,
  },
  valorunidad: {
    type: String,
    required: true,
  },
  stock: {
    type: String,
    required: true,
  },
  estado: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  imagenes: [
    {
        type: String,
    },
  ],
});

module.exports = mongoose.model("Producto", productoSchema);
