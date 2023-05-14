const express = require("express");
const router = express.Router();
var mercadopago = require('mercadopago');

const PaymentController = require("./Controllers/paymentsController");
const PaymentService = require("./services/PaymentService");

const PaymentInstance = new PaymentController(new PaymentService());

const {compare,encrypt, tokenSign} =require("./Controllers/helpers");


const User = require("./models/User");
const { deleteProduct, getProduct, getProducts, postProduct, updateProduct } = require("./Controllers/productController");
const { addProductToCart, removeFromCart } = require("./Controllers/cartControllers");
const { getCategories, postCategory, updateCategory, deleteCategory } = require("./Controllers/categoriaController");
const { addProductToFav, removeFromFav } = require("./Controllers/favControllers");
const { registerUser, loginUser, getUsers, getUser } = require("./Controllers/userControllers");
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

router.get("/products", getProducts)
router.get("/product/:id", getProduct)
router.post("/product/add",postProduct)
router.put("/product/update/:id", updateProduct)
router.delete("/product/delete/:id",deleteProduct)

router.post("/cart/add", addProductToCart)
router.put("/cart/remove", removeFromCart)

router.post("/fav/add", addProductToFav)
router.put("/fav/remove", removeFromFav)

router.get("/categories", getCategories)
router.post("/categories/add", postCategory)
router.put("/category/update/:id", updateCategory)
router.delete("/category/delete/:id", deleteCategory)

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