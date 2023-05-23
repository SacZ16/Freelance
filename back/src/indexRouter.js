const express = require("express");
const router = express.Router();
var mercadopago = require('mercadopago');

const PaymentController = require("./Controllers/paymentsController");
const PaymentService = require("./services/PaymentService");

const PaymentInstance = new PaymentController(new PaymentService());

const {compare,encrypt, tokenSign} =require("./Controllers/helpers");


const User = require("./models/User");
const Product = require("./models/Producto.js")
const Compras = require("./models/Compras.js")
const { deleteProduct, getProduct, getProducts, postProduct, updateProduct, getFilteredsProducts, getRandomProducts } = require("./Controllers/productController");
const { addProductToCart, removeFromCart } = require("./Controllers/cartControllers");
const { getCategories, postCategory, updateCategory, deleteCategory } = require("./Controllers/categoriaController");
const { addProductToFav, removeFromFav } = require("./Controllers/favControllers");
const { registerUser, loginUser, getUsers, getUser } = require("./Controllers/userControllers");
const { getHome, updateSlice, updatePosters, updateElegidos, updateDestacados, postHome } = require("./Controllers/homeControllers");
const { getCompras, getCompra } = require("./Controllers/comprasControllers");
router.get("/", function (req, res, next) {
  return res.json({
    "/payment": "generates a payment link",
    "/subscription": "generates a subscription link"
  });
});

router.get("/payment", function (req, res, next) {
  PaymentInstance.getPaymentLink(req, res);
});

router.get("/users", getUsers)
router.get("/user/:id", getUser)
router.post("/user/register", registerUser)
router.post("/user/login", loginUser)

router.get("/compras", getCompras)
router.get("/compra/:id", getCompra)

router.post("/fav/add", addProductToFav)
router.put("/fav/remove", removeFromFav)

router.post("/cart/add", addProductToCart)
router.put("/cart/remove", removeFromCart)

router.get("/products", getProducts)
router.get("/products/random", getRandomProducts)
router.get("/product/:id", getProduct)
router.get("/products/filter/:nombre", getFilteredsProducts)
router.post("/product/add",postProduct)
router.put("/product/update/:id", updateProduct)
router.delete("/product/delete/:id",deleteProduct)

router.post("/home/addd", postHome)
router.get("/home", getHome)
router.put("/home/slice", updateSlice)
router.put("/home/posters", updatePosters)
router.put("/home/elegidos", updateElegidos)
router.put("/home/destacados", updateDestacados)



router.get("/categories", getCategories)
router.post("/categories/add", postCategory)
router.put("/category/update", updateCategory)
router.delete("/category/delete/:id", deleteCategory)

router.post("/process_payment",function(req,res){
  mercadopago.configurations.setAccessToken("TEST-97172942281878-043019-3f4d6d2005fe2ab127f2338b10e40ce7-320615701");

  const {formData,productos,userid}=req.body
  // console.log(formData,productos)
  mercadopago.payment.save(formData)
    .then(function(response) {
      const { status, status_detail, id } = response.body;
      res.status(response.status).json({ status, status_detail, id,todo:response.body,productos:productos });
      if(status==="approved"){
        productos.map(async(e) => {
        let productoe = await Product.findById(e.id)
        productoe.stock = productoe.stock-e.stock
        productoe.save()
        })   
      }
      //

      const letras =  () => {
        let tresLetras= ""
              let abc = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"]
              let randomNum = 0
              for(let i = 0; i < 6; i++){
                randomNum = Math.floor(Math.random()*35)
                tresLetras = tresLetras + abc[randomNum]
      
              }
              console.log("soy letras",tresLetras)
              return tresLetras
            }
      letras()
// transaction_details.installment_amount = cantidad monto cuotas
// transaction_details.net_received_amount = neto si n impuesto pero sacado lo de mp
// transaction_details.total_paid_amount = total con impuesto de las cuotas
// transaction_amount = total sin impuesto de nada
// installments == numero de cuotas
// currency_id = "ars"
// status = aprovado
      const newCompras = new Compras({
        pedido:(`${JSON.stringify(new Date()).slice(6,8)}${letras()}${JSON.stringify(new Date()).slice(9,11)}`),
        productos:productos,
        total:(productos.map(e=>(Number((e.precio+"").replace('.', '')))).reduce((a, b) => a + b, 0)),
        codigoEnvio:"",
        comprador:userid

      });
      newCompras.save();
    })
    .catch(function(error) {
      console.error(error);
    });
})
router.post("/process_payment2",function(req,res){
  mercadopago.configurations.setAccessToken("TEST-97172942281878-043019-3f4d6d2005fe2ab127f2338b10e40ce7-320615701");

  mercadopago.payment.capture("1314601233", mercadopago, (error, response) => {
    if (error){
        console.log(error);
    }else{
        console.log(response.body.status)
    }
});
})

/* export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, password, email, compras } =
    req.body;

  try {
    const userBD = await User.findOne({ email });
    if (userBD) return res.json({ msg: 'The email already exists' });
    const usernameBD = await User.findOne({ username });
    if (usernameBD) return res.json({ msg: 'The username already exists' });

    if (!password) {
      const updatedUser = await User.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (!updatedUser) return res.json({ msg: 'The user was not found' });
      return res.json({ msg: 'User Updated' });
    } else {
      const passwordHash = await encrypt(password);

      const updatedUser = await User.findByIdAndUpdate(
        id,
        {
          username: username,
          password: passwordHash,
          email: email,
          phoneNumber: phoneNumber,
          address: address,
          location: location,
          zipCode: zipCode,
        },
        {
          new: true,
        }
      );

      return res.json({ msg: 'User Updated' });
    }
  } catch (e) {
    return res.json({ msg: `Error 404 - ${e}` });
  }
}; */

module.exports = router