const express = require("express");
const router = express.Router();
var mercadopago = require('mercadopago');

const PaymentController = require("./Controllers/paymentsController");
const PaymentService = require("./services/PaymentService");

const PaymentInstance = new PaymentController(new PaymentService());

const {compare,encrypt, tokenSign} =require("./Controllers/helpers");



const User = require("./models/User");
const { deleteProduct, getProduct, getProducts, postProduct, updateProduct } = require("./Controllers/productController");
router.get("/", function (req, res, next) {
  return res.json({
    "/payment": "generates a payment link",
    "/subscription": "generates a subscription link"
  });
});

router.get("/payment", function (req, res, next) {
  PaymentInstance.getPaymentLink(req, res);
});


router.post("/user",async function(req,res){
  try {
    const { username, password, email } = req.body
    const user = await User.findOne({ email });
    if (user) {
      return res.status(405).json({ msg: "Usario con mismo email" });
    }
    const passwordHash = await encrypt(password)
    await User.create({
        username: username,
        password: passwordHash,
        email: email
    })
    return res.status(200).json("Usuario creado satisfactoriamente")
} catch (e) {
    console.log(req.body)
    console.log("e",e)
    return res.status(400).json({ msg: `Error - ${e}` })
}
})


router.post("/login",async function (req,res){
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
    return res.status(200).send(tokenSession);
  } catch (e) {
    return res.json({ msg: `Error - ${e}` });
  }
})

router.get("/products", getProducts)
router.get("/product/:id", getProduct)
router.post("/product/add",postProduct)
router.put("/product/update/:id", updateProduct)
router.delete("/product/delete/:id",deleteProduct)

router.post("/process_payment",function(req,res){
  mercadopago.configurations.setAccessToken("TEST-97172942281878-043019-3f4d6d2005fe2ab127f2338b10e40ce7-320615701");

  mercadopago.payment.save(req.body)
    .then(function(response) {
      const { status, status_detail, id } = response.body;
      res.status(response.status).json({ status, status_detail, id });
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

module.exports = router