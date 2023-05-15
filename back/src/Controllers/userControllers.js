const User = require("../models/User.js")

const {compare,encrypt, tokenSign} =require("./helpers");
const  getUsers = async (req, res) => {
    try {
        const users = await User.find()

        return res.status(200).send(users)
      }
      catch (e) {
      return res.status(404).json({ msg: `Error 404 - ${e}` });
    }
  };
  
const getUser = async (req, res) => {
    const { id } = req.params;
    try {
      const user = await User.findById(id).populate("carrito")
      if (!user) return res.status(405).send('User not found');
      return res.status(200).json(user);
    } catch (e) {
      return res.status(404).json({ msg: `Error 404 - ${e}` });
    }
  }; 


const registerUser = async (req,res) => {
    try {
      const { username, password, email,} = req.body
      const user = await User.findOne({ email });
      if (user) {
        return res.status(405).json({ msg: "Usario con mismo email" });
      }
      const passwordHash = await encrypt(password)
      await User.create({
          username: username,
          password: passwordHash,
          email: email,
          isAdmin: false
      })
      return res.status(200).json("Usuario creado satisfactoriamente")
  } catch (e) {
      console.log(req.body)
      console.log("e",e)
      return res.status(400).json({ msg: `Error - ${e}` })
  }
  }
  
  
 const loginUser = async(req,res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(405).json({ msg: "Usario no encontrado" });
      }
      const checkPassword = await compare(password, user.password);
      const tokenSession = await tokenSign(user);
      if (!checkPassword) {
        return res.status(401).json({ msg: "Contraseña invalida" });
      }
      return res.status(200).json({token:tokenSession});
    } catch (e) {
      return res.status(404).json({ msg: `Error - ${e}` });
    }
  }

  module.exports = {registerUser, loginUser, getUser, getUsers}