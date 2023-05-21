const Compras = require("../models/Compras.js");

const  getCompras = async (req, res) => {
    try {
        const compras = await Compras.find().populate("comprador")

        return res.status(200).send(compras)
      }
      catch (e) {
      return res.status(404).json({ msg: `Error 404 - ${e}` });
    }
};

const getCompra = async (req, res) => {
    const { id } = req.params;
  
    try {
      const compraDetail = await Compras.findById(id);
      return res.status(200).json(compraDetail);
    } catch (e) {
      return res.status(404).json({ msg: `Error 404 - ${e}` });
    }
};

module.exports = {getCompras, getCompra}