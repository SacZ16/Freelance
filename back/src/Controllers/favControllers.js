const Product = require("../models/Producto.js");
const User = require("../models/User.js");

const addProductToFav = async (req, res) => {
    const {idProduct, idUser} = req.body

    try{
        const product = await Product.findById(idProduct);
        const user = await User.findById(idUser);

        if(!product){
            return res.status(402).json({msg: "Product not found"});
        }
        if(!user){
            return res.status(401).json({msg: "User not found"});
        }
        if(user.favoritos.filter(e => (e+'') === idProduct).length > 0){
            return res.status(405).json({msg: "This product is already in favs"})
        }
        user.favoritos.push(idProduct)

        user.save()

        return res.status(200).json({msg: "Producto agregado a favoritos correctamente"})

    }
    catch(e){
        console.log(e)
    }
}

const removeFromFav = async (req, res) => {
    const {idProduct, idUser} = req.body;

    try{
        const product = await Product.findById(idProduct);
        const user = await User.findById(idUser);

        if(!product){
            return res.status(403).json({msg: "Product not found"});
        }
        if(!user){
            return res.status(401).json({msg: "User not found"});
        }
        const updatedFav = user.favoritos.filter(e => (e+'') !== idProduct);
        console.log(updatedFav)

        user.favoritos = updatedFav
        user.save()
        return res.status(200).json({msg: "Product successfully removed"})
    } 
    catch(e){
        console.log(e)
    }
}

module.exports = {addProductToFav, removeFromFav}