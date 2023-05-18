const Product = require("../models/Producto.js");

const getProducts = async (req, res) => {
    try {
      const products = await Product.find().populate("categoria");
      return res.json(products);
    } catch (e) {
      return res.json({ msg: `Error 404 - ${e}` });
    }
  };

  const getRandomProducts = async (req, res) => {
    try {
      const products = await Product.aggregate([{$sample: {size: 4}}]);
      await Product.populate(products,{path:"categoria"})
      return res.json(products);
    } catch (e) {
      return res.json({ msg: `Error 404 - ${e}` });
    }
  };

  const getProduct = async (req, res) => {
    const { id } = req.params;
  
    try {
      const productDetailed = await Product.findById(id);
      return res.status(200).json(productDetailed);
    } catch (e) {
      return res.status(404).json({ msg: `Error 404 - ${e}` });
    }
  };

  const getFilteredsProducts = async (req, res) => {
    const {nombre} = req.params;

    try{
        const products = await Product.find().populate("categoria")
        const filtereds = products.filter(e => e.categoria.nombre.toUpperCase() === nombre.toUpperCase())

        return res.status(200).json(filtereds)
    } 
    catch (e){
        console.log(e)
    }
  }

  const postProduct = async (req, res) => {
    const { titulo, precio, unidades, valorunidad, stock, descripcion, categoria, imagenes, caracteristicas } = req.body;
    try {
      const newProduct = new Product({
        titulo,
        precio,
        unidades,
        valorunidad,
        stock,
        estado: true,
        descripcion,
        categoria,
        imagenes,
        caracteristicas : caracteristicas,
        estrellas: []
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
      if (!updateProduct) return res.status(405).json({ msg: "Product not found" });
      return res.status(200).json({ msg: "Product Update" });
    } catch (e) {
      return res.status(404).json({ msg: `Error 404 - ${e}` });
    }
  };

  module.exports = {getProducts, getProduct, postProduct, deleteProduct, updateProduct, getFilteredsProducts, getRandomProducts}