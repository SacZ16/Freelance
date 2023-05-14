const Product = require("../models/Producto.js");

const getProducts = async (req, res) => {
    try {
      const products = await Product.find();
      return res.json(products);
    } catch (e) {
      return res.json({ msg: `Error 404 - ${e}` });
    }
  };

  const getProduct = async (req, res) => {
    const { id } = req.params;
  
    try {
      const productDetailed = await Product.findById(id);
      return res.json(productDetailed);
    } catch (e) {
      return res.json({ msg: `Error 404 - ${e}` });
    }
  };

  const postProduct = async (req, res) => {
    const { titulo, precio, unidades, valorunidad, stock, estado, descripcion, categoria, imagenes } = req.body;
    try {
      const newProduct = new Product({
        titulo,
        precio,
        unidades,
        valorunidad,
        stock,
        estado,
        descripcion,
        categoria,
        imagenes
      });
  
      await newProduct.save();
      return res.status(200).json(newProduct,);
    } catch (e) {
        console.log("hola")
      console.log(res.status(404).json({ msg: `Error 404 ${e}` }));
    }
  };

  const deleteProduct = async (req, res) => {
    const id = req.params.id
    try {
      const deletedProduct = await Product.findByIdAndDelete(id);
      if (!deletedProduct) return res.json({ msg: "Product not found" });
      if (deletedProduct) return res.status(200).json({ msg: "product deleted" });
    } catch (e) {
        console.log("hola")
      return res.json({ msg: `Error 404 - ${e}` });
    }
  };

  const updateProduct = async (req, res) => {
    const { id } = req.params;
  
    try {
      const updateProduct = await Product.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (!updateProduct) return res.json({ msg: "Product not found" });
      return res.json({ msg: "Product Update" });
    } catch (e) {
      return res.json({ msg: `Error 404 - ${e}` });
    }
  };

  module.exports = {getProducts, getProduct, postProduct, deleteProduct, updateProduct}