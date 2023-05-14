const express =require( "express");
const cors =require( "cors");
const http = require("http")
const morgan =require( "morgan");
const dotenv=require("dotenv")
const indexRouter = require("./src/indexRouter")
const {getProducts, getProduct, postProduct, deleteProduct, updateProduct} = require("./src/Controllers/productController")
dotenv.config()
const connectDB  =require("./src/db/mongodb.js");
connectDB();
const app = express();
const server = http.createServer(app);
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/",indexRouter)
app.use("/products", getProducts)
app.use("/product/:id", getProduct)
app.use("/product/add",postProduct)
app.use("/product/delete/:id", deleteProduct)
app.use("/product/update/:id", updateProduct)

server.listen(8080, () => {
    console.log(`Server on port 8080`);
  });