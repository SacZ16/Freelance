const Product = require("../models/Producto.js");
const User = require("../models/User.js");

const addProductToCart = async (req, res) => {
    const {idProduct, idUser} = req.body

    try{
        const product = await Product.findById(idProduct);
        const user = await User.findById(idUser);

        if(!product){
            return res.status(400).json({msg: "Product not found"});
        }
        if(!user){
            return res.status(400).json({msg: "User not found"});
        }
        if(user.carrito.filter(e => (e+'') === idProduct).length > 0){
            return res.status(405).json({msg: "This product is already in the cart"})
        }
        user.carrito.push(idProduct)

        user.save()

        return res.status(200).json({msg: "Producto agregado al carrito correctamente"})

    }
    catch(e){
        console.log(e)
    }
}

const removeFromCart = async (req, res) => {
    const {idProduct, idUser} = req.body;

    try{
        const product = await Product.findById(idProduct);
        const user = await User.findById(idUser);

        if(!product){
            return res.status(400).json({msg: "Product not found"});
        }
        if(!user){
            return res.status(400).json({msg: "User not found"});
        }
        const updatedCart = user.carrito.filter(e => (e+'') !== idProduct);
        console.log(updatedCart)

        user.carrito = updatedCart
        user.save()
        return res.status(200).json({msg: "Product successfully removed"})
    } 
    catch(e){
        console.log(e)
    }
}

module.exports = {addProductToCart, removeFromCart}