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
const router = express.Router();
const server = http.createServer(app);
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/",indexRouter)

server.listen(4000, () => {
    console.log(`Server on port 4000`);
  });