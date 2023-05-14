const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
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
    type: Boolean,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  categoria: { type: mongoose.Schema.Types.ObjectId, ref: "Categoria" },
  imagenes: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model("Product", productSchema);
