const Category = require("../models/Categoria.js");

const getCategories = async (req, res) => {
    try {
      const categories = await Category.find();
      return res.status(200).json(categories);
    } catch (e) {
      return res.json({ msg: `Error 404 - ${e}` });
    }
  };

  const postCategory = async (req, res) => {
    const { nombre } = req.body;
    try {
      const newCategory = new Category({
        nombre
      });
  
      await newCategory.save();
      return res.status(200).json(newCategory,);
    } catch (e) {
      console.log(res.status(404).json({ msg: `Error 404 ${e}` }));
    }
  };

  const deleteCategory = async (req, res) => {
    const id = req.params.id
    try {
      const deletedCategory = await Category.findByIdAndDelete(id);
      if (!deletedCategory) return res.json({ msg: "Category not found" });
      if (deletedCategory) return res.status(200).json({ msg: "Category deleted" });
    } catch (e) {
      return res.json({ msg: `Error 404 - ${e}` });
    }
  };

  const updateCategory = async (req, res) => {
    const { id } = req.params;
  
    try {
      const updateCategory = await Category.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (!updateCategory) return res.json({ msg: "Category not found" });
      return res.json({ msg: "Category Update" });
    } catch (e) {
      return res.json({ msg: `Error 404 - ${e}` });
    }
  };

  module.exports = {getCategories,postCategory, deleteCategory, updateCategory}